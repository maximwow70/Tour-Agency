import { MapPoint } from "app/map-point";
import { Hotel } from "app/hotel";

export class Destination {

    private _place: MapPoint;

    private _imagesUrl: string[] = [];

    private _name: string;
    private _hotel: Hotel;
    
    constructor(place: MapPoint, name: string, hotel: Hotel){
        this._place = place;
        this._name = name;
        this._hotel = hotel;
    }
    
    public addImageFromURL(imageUrl: string): void{
        this._imagesUrl.push(imageUrl);
    }

    public get place(): MapPoint{
        return this._place;
    }
    public get name(): string{
        return this._name;
    }
    public get hotel(): Hotel{
        return this._hotel;
    }
    public get imageUrls(): string[] {
        return this._imagesUrl;
    }
}
