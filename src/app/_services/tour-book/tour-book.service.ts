import { Injectable } from '@angular/core';
import { Tour } from "app/tour";
import { TourGuide } from "app/tour-guide";

@Injectable()
export class TourBookService {
	
	private _tourList: {tour: Tour, guide: TourGuide}[] = [];

	constructor() { }

	public addTour(tour: Tour, guide: TourGuide): void {
		 let _tour = this._tourList.find(tl => tl.tour.name === tour.name);
        if (_tour) {
            _tour.guide = guide;
        } else {
            this._tourList.push({
                tour: tour,
                guide: guide
            })
        }
	}
	
	public getTourByName(tourName: string): Tour | null {
		let tourListItem = this._tourList.find(tl => tl.tour.name === tourName);
		if (tourListItem) {
			return tourListItem.tour;
		} else {
			return null;
		}
	}
	public getGuideByName(guideName: string): TourGuide | null {
		let tourListItem = this._tourList.find( tl => tl.guide.name === guideName);
		if (tourListItem) {
			return tourListItem.guide;
		} else {
			return null;
		}
	}
	public getTourByGuide(guide: TourGuide): Tour | null {
		let tourListItem = this._tourList.find( tl => tl.guide == guide);
		if (tourListItem) {
			return tourListItem.tour;
		} else {
			return null;
		}
	}
	public get tourList(): {tour: Tour, guide: TourGuide}[] {
		return this._tourList;
	}
	public get tours(): Promise<Tour[]> {
		let tours = [];
		for (let i = 0; i < this._tourList.length; i++){
			tours.push(this._tourList[i].tour);
		}
		return new Promise( resolve => {
			setTimeout(function(){
				resolve(tours)
			}, 0)
		});
	}
	public get guides(): TourGuide[] {
		let guides = [];
		for (let i = 0; i < this._tourList.length; i++) {
			guides.push(this._tourList[i].guide);
		}
		return guides;
	}

}
