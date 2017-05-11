import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TourBookService } from "app/_services/tour-book/tour-book.service";
import { TourGuide } from "app/tour-guide";
import { Tour } from "app/tour";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './home.scss',
    '../intro/intro.scss',
    '../guide-list/guide-list.scss',
    '../tour-guide/tour-guide.scss'
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private _tourBook: TourBookService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  public seeTours(): void {
    this._router.navigate(['/tours']);
  }

  public get tourGuides(): TourGuide[] {
    return this._tourBook.guides;
  }

  public getTourByGuide(guide: TourGuide): Tour {
    return this._tourBook.getTourByGuide(guide);
  }

  public viewTour(tour: Tour): void{
    this._router.navigate(['/tours', tour.name], '#');
  }

}
