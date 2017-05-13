import { Component, OnInit, Input } from '@angular/core';
import { Tour } from "app/tour";
import { Ticket } from "app/ticket";
import { Hotel } from "app/hotel";
import { Destination } from "app/destination";
import { MapPoint } from "app/map-point";

import { Router, ActivatedRoute } from '@angular/router';
import { TourManagerService } from "app/_services/tour-manager/tour-manager.service";
import { TourBookService } from "app/_services/tour-book/tour-book.service";
import { TourTransportation, getTourTransportation, getAllTourTransportation } from "app/tour-transportation";
import { getAllTourType } from "app/tour-type";

@Component({
	selector: 'app-tour-list',
	templateUrl: './tour-list.component.html',
	styleUrls: [
		'./tour-list.component.css',
		'./tour-list.scss',
		'../tour-card/tour-card.scss',
		'../tour/tour.scss',
		'../destination-list/destination-list.scss',
		'../destination/destination.scss',
		'../ticket-list/ticket-list.scss',
		'../ticket/ticket.scss',
		'../hotel/hotel.scss',
		'../tour-feature-list/tour-feature-list.scss',
		'../tour-feature/tour-feature.scss',
		'../photos/photos.scss',
		'../toolbar/toolbar.scss',
		'../menu/menu.scss'
	]
})
export class TourListComponent implements OnInit {

	private _tourList: Tour[];
	public activeTour: Tour;

	public userTours: Tour[];
	public userName: string;


	public searchedTourList: Tour[] = [];
	public searchTourName: string = '';
	public searchTourTransportation: any[] = [];
	public searchTourType: any[] = [];

	constructor(
		private _tourBook: TourBookService,
		private _tourManager: TourManagerService,
		private _router: Router,
		private _activatedRoute: ActivatedRoute
	) {
		this.searchTourTransportation = getAllTourTransportation();
		for (let i = 0; i < this.searchTourTransportation.length; i++){
			this.searchTourTransportation[i].selected = false;
		}
		this.searchTourType = getAllTourType();
		for (let i = 0; i < this.searchTourType.length; i++){
			this.searchTourType[i].selected = false;
		}
	}

	ngOnInit() {

		this.getTourList();
		this.activeTour = this._tourBook.getTourByName(
			this._activatedRoute.snapshot.params['name']
		)

	}

	public viewTour(tour: Tour): void {
		this.activeTour = tour;
		if (this.activeTour){
			this._router.navigate(['/tours', this.activeTour.name]);
		} else {
			this._router.navigate(['/tours']);
		}
	}
	public orderTourToUser(message: any): void{
		let user = {name: message.name, mail: message.mail};
		this.userName = message.name;
		if (message.ticket){
			this._tourManager.orderTourToUser(
				user,
				this.activeTour,
				[message.ticket]
			);
			this.userTours = this._tourManager.getToursFromUser(user);
		} else {
			alert('select ticket');
		}
	}

	public getHotelStars(hotel: Hotel): number[] {
		let stars = hotel.stars;
		let starsArray = [];
		for (let i = 0; i < stars; i++){
			starsArray.push(i);
		}
		return starsArray;
	}
	public getTourList(): void {
		this._tourBook.tours.then( 
			tourList => this._tourList = tourList
		);
		this._tourBook.tours.then(
			tourList => this.searchedTourList = tourList
		);
	}
	public get tourList(): Tour[] {
		return this._tourList;
	}
	public get tour(): Tour {
		return this.activeTour;
	}
	public get tickets(): Ticket[] {
		return this._tourManager.getTicketsFromTour(this.activeTour);
	}
	public get userTicketsForTour(): Ticket[] {
		return this._tourManager.getUserTicketsFromName(this.userName, this.activeTour);
	}

	public getTicketCountForTour(tour: Tour): number {
		return this._tourManager.getTicketCountForTour(tour);
	}
	public getOrderedCountTickets(tour: Tour): number {
		return this._tourManager.getOrderedCountTickets(tour);
	}
	public getCostRangeForTour(tour: Tour): string {
		return this._tourManager.getCostRangeForTour(tour);
	}

	public setToursFromUser(user: any): void{
		this.userTours = this._tourManager.getToursFromUser(user);
	}


	public toggleToolbarBtns(event): void {
		let btns = document.querySelectorAll('.toolbar-btn--sort');
		for (let i = 0; i < btns.length; i++){
			btns[i].classList.remove('toolbar-btn--active');
			if (event.currentTarget == btns[i]) {
				btns[i].classList.add('toolbar-btn--active');
			}
		}
	}
	public sortToursByNameIncrease(event): void {
		this.toggleToolbarBtns(event);
		this.searchedTourList.sort(function(a, b){
			if (a.name > b.name) {
				return 1;
			} else {
				return -1;
			}
		});
	}
	public sortToursByNameDecrease(event): void {
		this.toggleToolbarBtns(event);
		this.searchedTourList.sort(function(a, b){
			if (a.name < b.name) {
				return 1;
			} else {
				return -1;
			}
		});
	}
	public sortToursByCostIncrease(event): void {
		this.toggleToolbarBtns(event);
		let that = this;
		this.searchedTourList.sort(function(a, b){
			return that._tourManager.getMaxCostForTour(b) -
				that._tourManager.getMaxCostForTour(a);
		});
	}
	public sortToursByCostDecrease(event): void {
		this.toggleToolbarBtns(event);
		let that = this;
		this.searchedTourList.sort(function(a, b){
			return that._tourManager.getMinCostForTour(a) -
				that._tourManager.getMinCostForTour(b);
		});
	}
	

	public searchTours(): void {
		if (this.searchTourName.length > 0){
			this.searchedTourList = this._tourList.filter(
				t => ~t.name.toLowerCase().indexOf(this.searchTourName.toLowerCase())
			);
		} else {
			this.searchedTourList = this._tourList;
		}

		let isTransportationSelected = false;
		for (let i = 0; i < this.searchTourTransportation.length; i++){
			if (this.searchTourTransportation[i].selected === true){
				isTransportationSelected = true;
			}
		}
		if (isTransportationSelected){
			for (let i = 0; i < this.searchTourTransportation.length; i++){
				if (this.searchTourTransportation[i].selected !== true){
					this.searchedTourList = this.searchedTourList.filter(
						t => t.transportation.value !== this.searchTourTransportation[i].value
					);
				}
			}
		}

		let isTypeSelected = false;
		for (let i = 0; i < this.searchTourType.length; i++){
			if (this.searchTourType[i].selected === true){
				isTypeSelected = true;
			}
		}
		if (isTypeSelected) {
			for (let i = 0; i < this.searchTourType.length; i++){
				if (this.searchTourType[i].selected !== true){
					this.searchedTourList = this.searchedTourList.filter(
						t => t.type.value !== this.searchTourType[i].value
					);
				}
			}
		}
	}
	
	public onTransportationMenuClicked(): void {
		let menu = document.querySelector('.menu--transportation');
		menu.classList.toggle('menu--active');
	}
	public onTypeMenuClicked(): void {
		let menu = document.querySelector('.menu--type');
		menu.classList.toggle('menu--active');
	}

	public onDestinationClicked(event): void {
		event.currentTarget.classList.toggle('destination--open');
	}

}
