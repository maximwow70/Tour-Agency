import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: [
    './photos.component.css',
    './photos.scss'
  ]
})
export class PhotosComponent implements OnInit {
  
  @Input() urls: string[];

  public isReviewing: boolean = false;

  public activeImgNumber: number = 0;

  constructor() { 
  }

  ngOnInit() {
  }
  
  public previousImg(): void {
    if (this.activeImgNumber > 0) {
      this.activeImgNumber--;
    } else {
      this.activeImgNumber = this.urls.length - 1;
    }
  }
  public nextImg(): void {
    if (this.activeImgNumber < this.urls.length - 1){
      this.activeImgNumber++;
    } else {
      this.activeImgNumber = 0;
    }
  }

  public reviewImg(): void {
    this.isReviewing = true;
    let that = this;
    setTimeout(function(){
      that.isReviewing = false;
    }, 1000);
  }

  public get activeUrl(): string {
    this.reviewImg();
    return this.urls[this.activeImgNumber];
  }
  public 

  

}
