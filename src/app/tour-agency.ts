import { Tour } from "app/tour";
import { TourGuide } from "app/tour-guide";
import { TourManagerService } from "app/_services/tour-manager/tour-manager.service";
import { TourBookService } from "app/_services/tour-book/tour-book.service";
import { TourGuideAutorizationService } from "app/_services/tour-guide-autorization/tour-guide-autorization.service";

export class TourAgency {

    private _tourList: { tour: Tour, guide: TourGuide}[] = [];

    constructor( 
        private _tourManager: TourManagerService
    ) { }

    public addTour(tour: Tour, guide: TourGuide) { 
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
    public appointGuideToTour(tour: Tour, guide: TourGuide): void {

    }
    /*public getGuide(mail: string, password: string): TourGuide {
        return this._tourList.find(
            tl => (tl.guide.mail === mail && tl.guide.password === password)
        ).guide;
    }*/
    public getTourToGuide(guide: TourGuide): Tour {
        //return this._tourList.find( tl => tl.guide.name === guide.name);
        return null;
    }

}
