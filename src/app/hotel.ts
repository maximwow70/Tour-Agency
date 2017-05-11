import { HotelRoom } from "app/hotel-room";

export class Hotel {

    private _name: string;
    private _stars: number;

    private _rooms: HotelRoom[] = [];

    constructor(name: string, stars: number) {
        this._name = name;
        this._stars = stars;
    }

    public get name(): string {
        return this._name;
    }
    public get stars(): number {
        return this._stars
    }
}
