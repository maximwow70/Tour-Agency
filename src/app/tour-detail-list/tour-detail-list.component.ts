import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-tour-detail-list',
	templateUrl: './tour-detail-list.component.html',
	styleUrls: [
		'./tour-detail-list.component.css',
		'./tour-detail-list.scss'
	]
})
export class TourDetailListComponent implements OnInit {
	
	@Input() tourName: string;
	@Input() detailList: { name: string, value: string }[];

	private activeDetail: any;

	constructor() { }

	ngOnInit() {
	}

	public onViewDetail(detailNumber: number): void {
		console.log(detailNumber);
		let detailList = document.querySelectorAll('.tour_detail_list-detail');
		detailList[detailNumber].classList.toggle('tour_detail_list-detail--active');
	}

}
