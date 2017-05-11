import { Destination } from "app/destination";

export class TourGuide {

    private _tourShedule: {destination: Destination, roadTime: number, destinationTime: number}[] = [];

    private _name: string;
    private _age: number;

    private _photoUrl: string;

    constructor(name: string) {
        this._name = name;
    }

    public setPhotoUrl(url: string): void {
        this._photoUrl = url;
    }
    public addDestination(destination: Destination, roadTime: number, destinationTime: number){
        this._tourShedule.push({
            destination: destination,
            roadTime: roadTime,
            destinationTime: destinationTime
        })
    }

    public get name(): string {
        return this._name;
    }
    public get photoUrl(): string {
        return this._photoUrl;
    }


}
