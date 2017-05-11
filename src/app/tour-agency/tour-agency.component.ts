import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, RouterModule} from '@angular/router';

import { Tour } from "app/tour";
import { Destination } from "app/destination";
import { MapPoint } from 'app/map-point';
import { Hotel } from "app/hotel";
import { Ticket } from "app/ticket";
import { TourAgency } from "app/tour-agency";
import { TourGuide } from "app/tour-guide";
import { TourManagerService } from "app/_services/tour-manager/tour-manager.service";
import { ToursService } from "app/_services/tours/tours.service";
import { TourBookService } from "app/_services/tour-book/tour-book.service";
import { TourGuideAutorizationService } from "app/_services/tour-guide-autorization/tour-guide-autorization.service";

@Component({
	selector: 'app-tour-agency',
	templateUrl: './tour-agency.component.html',
	styleUrls: [
		'./tour-agency.scss',
		'../tour/tour.scss',
		'../destination-list/destination-list.scss',
		'../destination/destination.scss',
		'../ticket-list/ticket-list.scss',
		'../ticket/ticket.scss',
		'../tour-list/tour-list.scss',
		'../tour-card/tour-card.scss',
		'../hotel/hotel.scss',
		'../parallax/parallax.scss',
		'../smart_navigation/smart_navigation.scss',
	]
})
export class TourAgencyComponent implements OnInit {
	
	private _tourAgency: TourAgency;

	public activeTour: Tour;

	public userTours: Tour[];
	public userName: string;

	constructor(
		private _tourBook: TourBookService,
		private _tourManager: TourManagerService,
		private _tours: ToursService,
        private _guideAutorizations: TourGuideAutorizationService
	) {
		this._tourAgency = new TourAgency(
			this._tourManager
		);
	
		let paris = _tours.Paris;
		let georgeGuide = new TourGuide('George');
		georgeGuide.setPhotoUrl('/assets/guides/man.svg');
		this._tourBook.addTour(paris, georgeGuide);

		this._guideAutorizations.addAutorizationToGuide(georgeGuide, 'george@gmail.com', 'george');

		this._tourManager.addTicketForTour(paris, new Ticket('Paris', 'child', 323));
		this._tourManager.addTicketForTour(paris, new Ticket('Paris', 'adult', 442));
		this._tourManager.addTicketForTour(paris, new Ticket('Paris', 'for poor', 256));
		
		this._tourManager.addTicketCountForTour(paris, 13);


		let berlin = _tours.Berlin;
		let peterGuide = new TourGuide('Peter');
		peterGuide.setPhotoUrl('/assets/guides/man.svg');
		this._tourBook.addTour(berlin, peterGuide);

		this._guideAutorizations.addAutorizationToGuide(peterGuide, 'peter@gmail.com', 'peter');

		this._tourManager.addTicketForTour(berlin, new Ticket('Berlin', 'child', 10));
		this._tourManager.addTicketForTour(berlin, new Ticket('Berlin', 'adult', 12));
		this._tourManager.addTicketForTour(berlin, new Ticket('Berlin', 'for poor', 4));
		this._tourManager.addTicketForTour(berlin, new Ticket('Berlin', 'famous', 20));
		
		this._tourManager.addTicketCountForTour(berlin, 8);

		let newYork = _tours.NewYork;
		let maxGuide = new TourGuide('Max');
		maxGuide.setPhotoUrl('/assets/guides/man.svg');
		this._tourBook.addTour(newYork, maxGuide);

		this._guideAutorizations.addAutorizationToGuide(maxGuide, 'max@gmail.com', 'max');

		this._tourManager.addTicketForTour(newYork, new Ticket(newYork.name, 'child', 450));
		this._tourManager.addTicketForTour(newYork, new Ticket(newYork.name, 'adult', 477));
		this._tourManager.addTicketForTour(newYork, new Ticket(newYork.name, 'for poor', 100));
		this._tourManager.addTicketForTour(newYork, new Ticket(newYork.name, 'famous', 500));
		
		this._tourManager.addTicketCountForTour(newYork, 20);

		let seoul = _tours.Seoul;
		let melissaGuide = new TourGuide('Melissa');
		melissaGuide.setPhotoUrl('/assets/guides/man.svg');
		this._tourBook.addTour(seoul, melissaGuide);

		this._guideAutorizations.addAutorizationToGuide(melissaGuide, 'melissa@gmail.com', 'melissa');

		this._tourManager.addTicketForTour(seoul, new Ticket(seoul.name, 'child', 1500));
		this._tourManager.addTicketForTour(seoul, new Ticket(seoul.name, 'adult', 1600));
		this._tourManager.addTicketForTour(seoul, new Ticket(seoul.name, 'for poor', 1200));
		this._tourManager.addTicketForTour(seoul, new Ticket(seoul.name, 'famous', 3000));
		
		this._tourManager.addTicketCountForTour(seoul, 20);

		let norway = _tours.Norway;
		let IgorGuide = new TourGuide('Igor');
		IgorGuide.setPhotoUrl('/assets/guides/man.svg');
		this._tourBook.addTour(norway, IgorGuide);

		this._guideAutorizations.addAutorizationToGuide(IgorGuide, 'igor@gmail.com', 'igor');

		this._tourManager.addTicketForTour(norway, new Ticket(norway.name, 'child', 150));
		this._tourManager.addTicketForTour(norway, new Ticket(norway.name, 'adult', 160));
		this._tourManager.addTicketForTour(norway, new Ticket(norway.name, 'famous', 200));
		
		this._tourManager.addTicketCountForTour(norway, 32);
	
	}
	ngOnInit() {
	}
	
	public toggleNavigation(event): void{
		let nav = document.querySelector('.smart_navigation');
		nav.classList.toggle('smart_navigation--open');
	}

}
