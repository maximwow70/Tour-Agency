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
	public get NewYork(): Tour {
		let newYork = new Tour(
			'New York',
			TourType.CAMPING,
			TourTransportation.SHIP,
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod doloremque nobis soluta libero error provident consequatur dolor ipsa aliquam est hic, asperiores iste corporis!',
			4,
			3,
		);
		newYork.setDepartureCity('Mogilev');
		newYork.addDetail('food and meals', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		newYork.addDetail('essential information', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		newYork.addDetail('transportation', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		newYork.addDetail('interests', 'Cities, National Parks, Galleries');
		newYork.addDetail('cities', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		newYork.addDestination(
			new Destination(
				new MapPoint(40.707914, -74.004129),
				'destination1',
				new Hotel('Hotel1', 5)
			)
		);
		newYork.addDestination(
			new Destination(
				new MapPoint(40.71, -74.0),
				'destination2',
				new Hotel('Hotel2', 4)
			)
		);
		newYork.addDestination(
			new Destination(
				new MapPoint(40.714, -74.001),
				'destination3',
				new Hotel('Hotel3', 3)
			)
		);
		newYork.addDestination(
			new Destination(
				new MapPoint(40.712, -73.998),
				'destination4',
				new Hotel('Hotel4', 5)
			)
		);
		newYork.destinations[0].addImageFromURL('/assets/tours/new-york/new-york0.jpg');
		newYork.destinations[1].addImageFromURL('/assets/tours/new-york/new-york1.jpg');
		newYork.destinations[2].addImageFromURL('/assets/tours/new-york/new-york2.jpg');
		newYork.destinations[3].addImageFromURL('/assets/tours/new-york/new-york3.jpg');

		return newYork;
	}
	public get Seoul(): Tour {
		let seoul = new Tour(
			'Seoul',
			TourType.CAMPING,
			TourTransportation.TRAIN,
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod doloremque nobis soluta libero error provident consequatur dolor ipsa aliquam est hic, asperiores iste corporis!',
			3,
			2,
		);
		seoul.setDepartureCity('Mogilev');
		seoul.addDetail('food and meals', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		seoul.addDetail('essential information', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		seoul.addDetail('interests', 'Cities, National Parks, Galleries');
		seoul.addDestination(
			new Destination(
				new MapPoint(37.564225, 126.996382),
				'destination1',
				new Hotel('Hotel1', 5)
			)
		);
		seoul.addDestination(
			new Destination(
				new MapPoint(37.563, 126.963),
				'destination2',
				new Hotel('Hotel2', 4)
			)
		);
		seoul.addDestination(
			new Destination(
				new MapPoint(37.568, 126.965),
				'destination3',
				new Hotel('Hotel3', 3)
			)
		);
		seoul.addDestination(
			new Destination(
				new MapPoint(37.565, 126.94),
				'destination4',
				new Hotel('Hotel4', 3)
			)
		);
		seoul.addDestination(
			new Destination(
				new MapPoint(37.567, 126.95),
				'destination5',
				new Hotel('Hotel5', 4)
			)
		);
		seoul.addDestination(
			new Destination(
				new MapPoint(37.56, 126.98),
				'destination6',
				new Hotel('Hotel6', 5)
			)
		);
		seoul.destinations[0].addImageFromURL('/assets/tours/seoul/seoul5.jpg');
		seoul.destinations[1].addImageFromURL('/assets/tours/seoul/seoul1.jpg');
		seoul.destinations[2].addImageFromURL('/assets/tours/seoul/seoul2.jpg');
		seoul.destinations[3].addImageFromURL('/assets/tours/seoul/seoul3.jpg');
		seoul.destinations[4].addImageFromURL('/assets/tours/seoul/seoul4.jpg');
		seoul.destinations[5].addImageFromURL('/assets/tours/seoul/seoul.jpg');

		return seoul;
	}
	public get Norway(): Tour {
		let norway = new Tour(
			'Norway',
			TourType.CAMPING,
			TourTransportation.TRAIN,
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quod doloremque nobis soluta libero error provident consequatur dolor ipsa aliquam est hic, asperiores iste corporis!',
			3,
			2,
		);
		norway.setDepartureCity('Mogilev');
		norway.addDetail('food and meals', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		norway.addDetail('essential information', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore laboriosam optio, vero sint? Veniam amet soluta dolorem provident dolore, sed!');
		norway.addDetail('interests', 'Cities, National Parks, Galleries');
		norway.addDestination(
			new Destination(
				new MapPoint(59.6, 10.7),
				'destination1',
				new Hotel('Hotel1', 5)
			)
		);
		norway.addDestination(
			new Destination(
				new MapPoint(59.45, 10.65),
				'destination2',
				new Hotel('Hotel2', 4)
			)
		);
		norway.addDestination(
			new Destination(
				new MapPoint(59.94, 10),
				'destination3',
				new Hotel('Hotel3', 3)
			)
		);
		norway.addDestination(
			new Destination(
				new MapPoint(59.41, 10.2),
				'destination4',
				new Hotel('Hotel4', 3)
			)
		);
		norway.destinations[0].addImageFromURL('/assets/tours/norway/norway1.jpg');
		norway.destinations[1].addImageFromURL('/assets/tours/norway/norway2.jpg');
		norway.destinations[2].addImageFromURL('/assets/tours/norway/norway3.jpg');
		norway.destinations[3].addImageFromURL('/assets/tours/norway/norway4.jpg');
		
		return norway;
	}

}
