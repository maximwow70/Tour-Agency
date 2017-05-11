import { Injectable } from '@angular/core';
import { Tour } from "app/tour";
import { Ticket } from "app/ticket";

@Injectable()
export class TourManagerService {

    //private _ticketsForTour: [ {tour: Tour, tickets: Ticket[]} ];
    private _ticketsForTour: any[] = [];

    private _usersTourList: any[] = [];

    private _ticketCountForTours: any[] = [];

    constructor() {
    }

    public addTicketForTour(tour: Tour, ticket: Ticket): void {
        let ticketForTour = this._ticketsForTour.find(
            tft => tft.tour.name === tour.name
        );
        if (ticketForTour) {
            ticketForTour.tickets.push(ticket);
        } else {
            this._ticketsForTour.push({ tour: tour, tickets: [ticket] });
        }
    }
    public getTicketsFromTour(tour: Tour): Ticket[] {
        let ticketForTour = this._ticketsForTour.find(
            tft => tft.tour.name === tour.name
        );
        if (ticketForTour) {
            return ticketForTour.tickets;
        } else {
            return [];
        }
    }
    public getUserTicketsFromName(userName: string, tour: Tour): Ticket[] {
        let ticketForTour = this._ticketsForTour.find(
            tft => tft.tour.name === tour.name && tft.user.name === userName
        );
        if (ticketForTour) {
            return ticketForTour.tickets;
        } else {
            return [];
        }
    }
    public orderTourToUser(user: any, tour: Tour, tickets: Ticket[]) {
        let userTour = this._usersTourList.find(
            utl => utl.tour.name === tour.name && utl.user.name === user.name
        );
        if (this.getOrderedCountTickets(tour) < this.getTicketCountForTour(tour)) {
            if (!userTour) {
                this._usersTourList.push({
                    user: user,
                    tour: tour,
                    tickets: tickets
                });
            } else {
                for (let i = 0; i < tickets.length; i++) {
                    userTour.tickets.push(tickets[i]);
                }
            }
        }
    }

    public addTicketCountForTour(tour: Tour, ticketCount: number): void {
        if (!this._ticketCountForTours.find(tc => tc.tour.name === tour.name)) {
            this._ticketCountForTours.push({
                tour: tour,
                ticketCount: ticketCount
            });
        } else {
            this._ticketCountForTours.find(
                tc => tc.tour.name === tour.name
            ).ticketCount = ticketCount
        }
    }

    public getToursFromUser(user: any): Tour[] {
        let tourList = this._usersTourList.filter(t => t.user.name === user.name);
        for (let i = 0; i < tourList.length; i++){
            tourList[i].totalCost = this.getTotalTicketsCost(tourList[i].tickets);
        }
        return tourList;
    }

    public getToursFromAllUsers(): any {
        let UserTourList = [];

        for (let i = 0; i < this._usersTourList.length; i++) {
            let isTourCanAdd = true;
            for (let j = 0; j < this._usersTourList.length; j++) {
                if (i == j) {
                    break;
                }
                if (this._usersTourList[i].tour.name === this._usersTourList[j].tour.name) {
                    isTourCanAdd = false;
                }
            }
            if (isTourCanAdd) {
                let tour = this._usersTourList[i].tour;
                let users = [];

                let tours = this._usersTourList.filter(utl => utl.tour.name === tour.name);
                for (let j = 0; j < tours.length; j++) {

                    users.push({
                        user: tours[j].user,
                        tickets: tours[j].tickets,
                        totalCost: this.getTotalTicketsCost(tours[j].tickets)
                    });
                }

                UserTourList.push({
                    tour: this._usersTourList[i].tour,
                    users: users
                })
            }
        }

        return UserTourList;
    }

    public getTotalTicketsCost(tickets: Ticket[]): number {
        let totalTicketsCost = 0;
        for (let i = 0; i < tickets.length; i++) {
            totalTicketsCost += tickets[i].cost;
        }
        return totalTicketsCost;
    }

    public getTicketCountForTour(tour: Tour): number {
        return this._ticketCountForTours.find(
            tc => tc.tour.name === tour.name
        ).ticketCount;
    }
    public getOrderedCountTickets(tour: Tour): number {
        let usersTourList = this._usersTourList.filter(utr => utr.tour.name === tour.name);
        let countTickets = 0;
        for (let i = 0; i < usersTourList.length; i++) {
            countTickets += usersTourList[i].tickets.length;
        }
        return countTickets;
    }

    public getMinCostForTour(tour: Tour): number {
        let tickets = this.getTicketsFromTour(tour);
        let min = tickets[0].cost;
        for (let i = 0; i < tickets.length; i++){
            if (tickets[i].cost < min){
                min = tickets[i].cost;
            }
        }
        return min;
    }
    public getMaxCostForTour(tour: Tour): number {
        let tickets = this.getTicketsFromTour(tour);
        let max = tickets[0].cost;
        for (let i = 0; i < tickets.length; i++){
            if (tickets[i].cost > max){
                max = tickets[i].cost;
            }
        }
        return max;
    }
    public getCostRangeForTour(tour: Tour): string {
        return this.getMinCostForTour(tour) + '$ ' + ' - ' + this.getMaxCostForTour(tour) + '$';
    }

}
