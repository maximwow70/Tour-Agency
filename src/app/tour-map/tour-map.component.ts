import { Component, OnInit, Input } from '@angular/core';
import { Destination } from "app/destination";
import { MapPoint } from "app/map-point";

@Component({
	selector: 'app-tour-map',
	templateUrl: './tour-map.component.html',
	styleUrls: [
		'./tour-map.component.css',
		'./tour-map.scss'
	]
})
export class TourMapComponent implements OnInit {

	private _zoom: number = 15;

	private _styles = [
		{ elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
		{ elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
		{ elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
		{
			featureType: 'administrative.locality',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#d59563' }]
		},
		{
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#d59563' }]
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [{ color: '#263c3f' }]
		},
		{
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#6b9a76' }]
		},
		{
			featureType: 'road',
			elementType: 'geometry',
			stylers: [{ color: '#38414e' }]
		},
		{
			featureType: 'road',
			elementType: 'geometry.stroke',
			stylers: [{ color: '#212a37' }]
		},
		{
			featureType: 'road',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#9ca5b3' }]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [{ color: '#746855' }]
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry.stroke',
			stylers: [{ color: '#1f2835' }]
		},
		{
			featureType: 'road.highway',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#f3d19c' }]
		},
		{
			featureType: 'transit',
			elementType: 'geometry',
			stylers: [{ color: '#2f3948' }]
		},
		{
			featureType: 'transit.station',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#d59563' }]
		},
		{
			featureType: 'water',
			elementType: 'geometry',
			stylers: [{ color: '#17263c' }]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#515c6d' }]
		},
		{
			featureType: 'water',
			elementType: 'labels.text.stroke',
			stylers: [{ color: '#17263c' }]
		}
	];

	@Input() destinations: Destination[] = [];

	constructor() {
	}

	ngOnInit() {
	}

	public get map(): any {
		return {
			zoom: +this._zoom,
			styles: this._styles,
			polylineStyles: {
				weight: 2,
				color: '#C29D73'
			},
			marker: {
				icon: '/assets/binoculars.png'
			}
		}
	}
	public get mainDestinationPlace(): MapPoint {
		if (this.destinations.length > 0) {
			return this.destinations[0].place;
		} else {
			return new MapPoint(0,0);
		}
	}

}
