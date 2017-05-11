import { Component, OnInit } from '@angular/core';
import { Tour } from "app/tour";
import { Router, ActivatedRoute } from '@angular/router';
import { TourManagerService } from "app/_services/tour-manager/tour-manager.service";

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [
		'./user.component.css',
		'./user.scss',
		'../ticket-list/ticket-list.scss',
		'../ticket/ticket.scss',
		'../tour-list/tour-list.scss',
		'../tour-card/tour-card.scss',
	]
})
export class UserComponent implements OnInit {

	public userName: string;

	public isUserEntered: boolean = false;

	constructor(
		private _tourManager: TourManagerService,
		private _router: Router,
		private _activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.userName = this._activatedRoute.snapshot.params['name'];
		if (this.userName && this.userName.length > 0) {
			this.setIsUserEntered(true);
		}
	}

	public get userTours(): Tour[] {
		return this._tourManager.getToursFromUser({ name: this.userName });
	}
	public get canUserEnter(): boolean {
		return (this.userName && this.userName.length) > 0 ? true : false;
	}
	public setIsUserEntered(flag: boolean): void {
		this.isUserEntered = flag;
		if (flag === false) {
			this.userName = '';
		}
		this._router.navigate(['/users', this.userName]);
	}

	public viewTour(tour: Tour): void {
		this._router.navigate(['/tours', tour.name]);
	}

}
