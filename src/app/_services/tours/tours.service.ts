import { Injectable } from '@angular/core';
import { Tour } from "app/tour";
import { Destination } from "app/destination";
import { MapPoint } from "app/map-point";
import { Hotel } from "app/hotel";

import { TourType, getTourType } from '../../tour-type';
import { TourTransportation } from "app/tour-transportation";


@Injectable()
export class ToursService {

	constructor() { }
	
	public get Berlin(): Tour {
		let berlin = new Tour(
			'Berlin',
			TourType.WALKING,
			TourTransportation.PLANE,
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi inventore possimus quisquam iste sunt ut quia delectus consectetur, officiis temporibus.',
			3,
			2
		);
		berlin.setDepartureCity('Mogilev');
		berlin.addDetail('food and meals', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		berlin.addDetail('essential information', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		berlin.addDetail('transportation', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		berlin.addDetail('interests', 'Cities, National Parks, Galleries');
		berlin.addDestination(
			new Destination(
				new MapPoint(52.519747, 13.397276),
				'destination1',
				new Hotel('Hotel1', 2)
			)
		);
		berlin.addDestination(
			new Destination(
				new MapPoint(52.518, 13.397),
				'destination2',
				new Hotel('Hotel2', 5)
			)
		);
		berlin.addDestination(
			new Destination(
				new MapPoint(52.516, 13.394),
				'destination3',
				new Hotel('Hotel3', 4)
			)
		);
		berlin.destinations[0].addImageFromURL('/assets/berlin1.jpg');
		berlin.destinations[1].addImageFromURL('/assets/berlin2.jpg');
		berlin.destinations[2].addImageFromURL('/assets/berlin3.jpg');

		return berlin;
	}
	public get Paris(): Tour {
		let paris = new Tour(
			'Paris',
			TourType.CAMPING,
			TourTransportation.CYCLE,
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod doloremque nobis soluta libero error provident consequatur dolor ipsa aliquam est hic, asperiores iste corporis!',
			3,
			2,
		);
		paris.setDepartureCity('Mogilev');
		paris.addDetail('food and meals', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		paris.addDetail('essential information', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		paris.addDetail('transportation', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		paris.addDetail('interests', 'Cities, National Parks, Galleries');
		paris.addDetail('cities', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		paris.addDestination(
			new Destination(
				new MapPoint(48.854320, 2.351675),
				'destination1',
				new Hotel('Hotel1', 5)
			)
		);
		paris.addDestination(
			new Destination(
				new MapPoint(48.856, 2.352),
				'destination2',
				new Hotel('Hotel2', 4)
			)
		);
		paris.addDestination(
			new Destination(
				new MapPoint(48.85, 2.36),
				'destination3',
				new Hotel('Hotel3', 3)
			)
		);
		paris.destinations[0].addImageFromURL('/assets/paris1.jpg');
		paris.destinations[1].addImageFromURL('/assets/paris2.jpg');
		paris.destinations[2].addImageFromURL('/assets/paris3.jpg');

		return paris;
	}
	public get Mogilev(): Tour {
		let mogilev = new Tour(
			'Mogilev',
			TourType.CAMPING,
			TourTransportation.FOOT,
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod doloremque nobis soluta libero error provident consequatur dolor ipsa aliquam est hic, asperiores iste corporis!',
			10,
			9,
		);
		mogilev.addDestination(
			new Destination(
				new MapPoint(48.854320, 2.351675),
				'destination1',
				new Hotel('Hotel1', 5)
			)
		);
		mogilev.addDestination(
			new Destination(
				new MapPoint(48.856, 2.352),
				'destination2',
				new Hotel('Hotel2', 4)
			)
		);
		mogilev.addDestination(
			new Destination(
				new MapPoint(48.85, 2.36),
				'destination3',
				new Hotel('Hotel3', 3)
			)
		);
		mogilev.destinations[0].addImageFromURL('/assets/paris1.jpg');
		mogilev.destinations[1].addImageFromURL('/assets/paris2.jpg');
		mogilev.destinations[2].addImageFromURL('/assets/paris3.jpg');

		return mogilev;
	}

}
