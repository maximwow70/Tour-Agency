import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { TourGuideAutorizationService } from "app/_services/tour-guide-autorization/tour-guide-autorization.service";
import { TourGuide } from "app/tour-guide";
import { Tour } from "app/tour";
import { TourBookService } from "app/_services/tour-book/tour-book.service";
import { Hotel } from "app/hotel";
import { Destination } from "app/destination";
import { MapPoint } from "app/map-point";
import { TourManagerService } from "app/_services/tour-manager/tour-manager.service";

@Component({
	selector: 'app-tour-guide',
	templateUrl: './tour-guide.component.html',
	styleUrls: [
		'./tour-guide.component.css',
		'./tour-guide.scss',
		'../tour-card/tour-card.scss',
		'../tour/tour.scss',
		'../destination-list/destination-list.scss',
		'../destination/destination.scss',
		'../ticket-list/ticket-list.scss',
		'../ticket/ticket.scss',
		'../hotel/hotel.scss',
		'../tour-feature-list/tour-feature-list.scss',
		'../tour-feature/tour-feature.scss'
	]
})
export class TourGuideComponent implements OnInit {

	private _isGuideEntered: boolean = false;

	private _guide: TourGuide;

	private _guideTour: Tour;

	public guideMail: string = 'peter@gmail.com';
	public guidePassword: string = 'peter';

	public changingTour: Tour;

	public newDestination: Destination;

	constructor(
		private _tourManager: TourManagerService,
		private _guideAutorization: TourGuideAutorizationService,
		private _tourBook: TourBookService,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {

	}

	ngOnInit() {

	}

	public setIsGuideEntered(flag: boolean): void {
		if (flag === false) {
			this.guideMail = ''
			this.guidePassword = '';
		} else {
			this._guide =
				this._guideAutorization.getGuideByAutorization(
					this.guideMail,
					this.guidePassword
				);
			this._guideTour =
				this._tourBook.getTourByGuide(this._guide);

			this.changingTour = this._guideTour;

		}
		this._isGuideEntered = flag;
		//this.router.navigate(['/guide', this._guide.name]);

		this.newDestination = new Destination(
			new MapPoint(
				this._guideTour.destinations[0].place.coords.lat,
				this._guideTour.destinations[0].place.coords.lng
			),
			'',
			new Hotel('', null)
		);
	}



	public addDestination() {
		this._guideTour.addDestination(new Destination(
			new MapPoint(
				+this.newDestination.place.coords.lat,
				+this.newDestination.place.coords.lng
			),
			this.newDestination.name,
			new Hotel(
				this.newDestination.hotel.name,
				+this.newDestination.hotel.stars
			)
		));
	}
	public removeDestination(destination: Destination): void {
		this._guideTour.removeDestination(destination);
	}
	public removeDestinationByIndex(index: number): void {
		this._guideTour.removeDestinationByIndex(index);
	}
	public setTourName(name: string): void {
		this._guideTour.setName(name);
	}
	public setTourDescription(description: string): void {
		this._guideTour.setDescription(description);
	}

	public get canGuideEnter(): boolean {
		let guideAutorization =
			this._guideAutorization.getGuideByAutorization(
				this.guideMail,
				this.guidePassword
			);
		if (guideAutorization) {
			return true;
		} else {
			return false;
		}
	}

	public get isGuideEntered(): boolean {
		return this._isGuideEntered;
	}

	public get tour(): Tour {
		return this._guideTour;
	}
	public get canRemoveDestination(): boolean {
		if (this._guideTour.destinations.length > 0) {
			return true;
		} else {
			return false;
		}
	}
	public get ticketCountForTour(): number {
		return this._tourManager.getTicketCountForTour(this._guideTour);
	}


	public getHotelStars(hotel: Hotel): number[] {
		let stars = hotel.stars;
		let starsArray = [];
		for (let i = 0; i < stars; i++) {
			starsArray.push(i);
		}
		return starsArray;
	}


	public onDestinationClicked(event): void {
		event.currentTarget.classList.toggle('destination--open');
	}


}
