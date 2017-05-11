import { Injectable } from '@angular/core';
import { TourGuide } from "app/tour-guide";

@Injectable()
export class TourGuideAutorizationService {

	private _tourGuideAutorizations: {guide: TourGuide, mail: string, password: string}[] = [];

	constructor() { }
	
	public addAutorizationToGuide(guide: TourGuide, mail: string, password: string): void {
		this._tourGuideAutorizations.push({
			guide: guide,
			mail: mail,
			password: password
		})
	}

	public getAutorizationByName(guideName: string): {mail: string, password: string} {
		let autorizationData = 
			this._tourGuideAutorizations.find(
				tga => tga.guide.name === guideName 
			);
		return {
			mail: autorizationData.mail,
			password: autorizationData.password
		}
	}
	public getGuideByAutorization(mail: string, password: string): TourGuide | null {
		let guideAutorization = this._tourGuideAutorizations.find(
			tga => tga.mail === mail && tga.password === password
		);
		if (guideAutorization) {
			return guideAutorization.guide;
		} else {
			return null;
		}
	}

}
