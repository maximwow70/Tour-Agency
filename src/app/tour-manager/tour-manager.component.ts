import { Component, OnInit, Input } from '@angular/core';
import { TourManagerService } from "app/_services/tour-manager/tour-manager.service";
import { Router } from "@angular/router";
import { Tour } from "app/tour";


@Component({
  selector: 'app-tour-manager',
  templateUrl: './tour-manager.component.html',
  styleUrls: [
    './tour-manager.component.css',
    './tour-manager.scss',
    '../tour-list/tour-list.scss',
    '../tour-card/tour-card.scss',
    '../user/user.scss',
    '../ticket-list/ticket-list.scss',
    '../ticket/ticket.scss',
  ]
})
export class TourManagerComponent implements OnInit {

  //@Input() toursFromAllUsers: any = [];

  public managerName: string = 'admin';
  public managerPassword: string = 'admin';
  public isManagerEntered: boolean = false;
  
  public toursFromAllUsers = this.tourManager.getToursFromAllUsers();

  constructor(
    public tourManager: TourManagerService,
		private _router: Router
  ) { }

  ngOnInit() {
    this.toursFromAllUsers = this.tourManager.getToursFromAllUsers();
  }

  public setIsManagerEntered(flag: boolean) {
    this.isManagerEntered = flag;
    this.managerName = '';
    this.managerPassword = '';
  }
  public get canManagerEnter(): boolean {
    return (this.managerName === 'admin' && this.managerPassword) === 'admin' ? true : false;
  }
  public viewTour(tour: Tour): void {
      this._router.navigate(['/tours', tour.name]);
  }

}
