export class MapPoint {

    private _latitude: number;
    private _longitude: number;

    constructor(latitude: number, longitude: number) {
        this._latitude = latitude;
        this._longitude = longitude;
    }

    public get coords(){
        return {
            lat: this._latitude,
            lng: this._longitude
        }
    }
}
