import { MapPoint } from "app/map-point";
import { Destination } from "app/destination";
import { Ticket } from "app/ticket";
import { Hotel } from "app/hotel";

import { getTourType, TourType } from './tour-type';
import { TourTransportation, getTourTransportation } from "app/tour-transportation";

export class Tour {

    private _destinations: Destination[] = [];

    //private _tickets: Ticket[];

    private _members: any; // We need it??

     //or better types Date[]??
    private _days: number;
    private _nights: number; 


    private _startDate: Date;
    private _endDate: Date;

    private _name: string;
    private _type: TourType;
    private _transportation: TourTransportation;
    private _departureCity: string;
    private _description: string;

    private _details: { name: string, value: string }[] = [];

    constructor(name: string, type: TourType, transportation: TourTransportation, description: string, days: number, nights: number){
        this._name = name;
        this._type = type;
        this._transportation = transportation;
        this._description = description;
        this._days = days;
        this._nights = nights;
    }
    public addDestination(destination: Destination): void {
        this._destinations.push(destination);
    }
    public removeDestination(destination: Destination): void {
        this._destinations = this._destinations.filter(
            d => (d.place.coords.lat !== destination.place.coords.lat) && (d.place.coords.lng !== destination.place.coords.lng )
        );
    }
    public removeDestinationByIndex(index: number): void {
        let _destinations = [];
        for (let i = 0; i < this._destinations.length; i++){
            if (i !== index){
                _destinations.push(this._destinations[i]);
            }
        }
        this._destinations = _destinations;
    }
    public addDetail(detailName: string, detailValue: string): void {
        this._details.push({
            name: detailName,
            value: detailValue
        });
    }
    public setName(name: string): void {
        this._name = name;
    }
    public setDescription(description: string): void {
        this._description = description;
    }
    public setDepartureCity(departureCity: string): void {
        this._departureCity = departureCity;
    }

    public get destinations(): Destination[]{
        return this._destinations;
    }
    public get name(): string {
        return this._name;
    }
    public get type(): {value: string, imgUrl: string} {
        return getTourType(this._type);
    }
    public get transportation(): { value: string, imgUrl: string } {
        return getTourTransportation(this._transportation);
    }
    public get departureCity(): string {
        return this._departureCity;
    }
    public get description(): string {
        return this._description;
    }
    public get days(): number {
        return this._days;
    }
    public get nights(): number{
        return this._nights;
    }
    public get details(): { name: string, value: string }[] {
        return this._details;
    }

    public get mainImgUrl(): string {
        if (this._destinations.length > 0){
            return this._destinations[0].imageUrls[0];
        } else {
            return '';
        }
    }
    public get allImgUrl(): string[] {
        let imgUrls = [];
        for (let i = 0; i < this._destinations.length; i++){
            imgUrls.push(this._destinations[i].imageUrls[0])
        }
        return imgUrls;
    }



    public static toJson(tour: Tour): string{
        return JSON.stringify(tour);
    }
    public static fromJson(jsonTour: string): Tour{
        let parsedTour = JSON.parse(jsonTour);
        console.log(parsedTour);
        let tour = new Tour(
            parsedTour._name,
            parsedTour._type,
            parsedTour._direction,
            parsedTour._description,
            parsedTour._days,
            parsedTour._nights
        );
        for (let i = 0; i < parsedTour._destinations.length; i++){
            let destination = new Destination(
                new MapPoint(
                    parsedTour._destinations[i]._place._latitude,
                    parsedTour._destinations[i]._place._longitude,
                ),
                parsedTour._destinations[i]._name,
                new Hotel(
                    parsedTour._destinations[i]._hotel._name,
                    parsedTour._destinations[i]._hotel._stars
                )
            );
            for (let j = 0; j < parsedTour._destinations[i]._imagesUrl.length; j++){
                destination.addImageFromURL(
                    parsedTour._destinations[i]._imagesUrl[j]
                );
            }
            tour.addDestination(destination);
        }
        return tour;
    }

}
