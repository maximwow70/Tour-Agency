export class Ticket {
    
    private _name: string;
    private _type: string;

    private _cost: number;

    constructor(name: string, type: string, cost: number) {
        this._name = name;
        this._type = type;
        this._cost = cost;
    }

    public get name(): string{
        return this._name;
    }
    public get type(): string{
        return this._type;
    }
    public get cost(): number{
        return this._cost;
    }
    
}
