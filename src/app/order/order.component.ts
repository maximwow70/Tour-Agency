import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from "app/ticket";
import { Tour } from "app/tour";

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: [
		'./order.component.css',
		'./order.scss',
		'../ticket-list/ticket-list.scss',
		'../ticket/ticket.scss',
	]
})
export class OrderComponent implements OnInit {

	private _activeTicket: Ticket;

	constructor() { }

	ngOnInit() {
	}

	@Input() userName: string;
	@Input() userMail: string;

	@Input() maxTicketCount: number;
	@Input() ticketCount: number;
	@Input() tickets: Ticket[] = [];

	@Output() onUserName: EventEmitter<any> = new EventEmitter<any>();

	public orderTourToUser(e) {
		this.onUserName.emit({
			name: this.userName,
			mail: this.userMail,
			ticket: this._activeTicket
		});
	}

	public isActiveTicket(ticket: Ticket): boolean {
		if (this._activeTicket == ticket) {
			return true;
		} else {
			return false;
		}
	}
	public selectTicket(ticket: Ticket): void {
		this._activeTicket = ticket;
	}

	public get isCanOrder(): boolean {
		return (
			this._activeTicket && 
			this.userMail && 
			this.userName &&
			this.ticketCount < this.maxTicketCount
		) ? true : false;
	}

}
