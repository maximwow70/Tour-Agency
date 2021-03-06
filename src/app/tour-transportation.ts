export enum TourTransportation {
    BUS,
    TRAIN,
    PLANE,
    CAR,
    FOOT,
    CYCLE,
    SHIP
}
export function getTourTransportation(transportation: TourTransportation): { value: string, imgUrl: string } {
    switch (transportation) {
        case TourTransportation.BUS: {
            return {
                value: 'Bus',
                imgUrl: '/assets/tour-transportation/bus.svg'
            }
        }
        case TourTransportation.TRAIN: {
            return {
                value: 'Train',
                imgUrl: '/assets/tour-transportation/train.svg'
            }
        }
        case TourTransportation.PLANE: {
            return {
                value: 'Plane',
                imgUrl: '/assets/tour-transportation/plane.svg'
            }
        }
        case TourTransportation.CAR: {
            return {
                value: 'Car',
                imgUrl: '/assets/tour-transportation/car.svg'
            }
        }
        case TourTransportation.FOOT: {
            return {
                value: 'Foot',
                imgUrl: '/assets/tour-transportation/foot.svg'
            }
        }
        case TourTransportation.CYCLE: {
            return {
                value: 'Cycle',
                imgUrl: '/assets/tour-transportation/cycle.svg'
            }
        }
        case TourTransportation.SHIP: {
            return {
                value: 'Ship',
                imgUrl: '/assets/tour-transportation/ship.svg'
            }
        }
        default: {
            return {
                value: 'Car',
                imgUrl: '/assets/tour-transportation/car.svg'
            }
        }
    }
}
export function getAllTourTransportation(): { value: string, imgUrl: string }[] {
    let transportations = [];
    transportations.push(
        getTourTransportation(TourTransportation.BUS)
    );
    transportations.push(
        getTourTransportation(TourTransportation.TRAIN)
    );
    transportations.push(
        getTourTransportation(TourTransportation.PLANE)
    );
    transportations.push(
        getTourTransportation(TourTransportation.CAR)
    );
    transportations.push(
        getTourTransportation(TourTransportation.FOOT)
    );
    transportations.push(
        getTourTransportation(TourTransportation.CYCLE)
    );
    transportations.push(
        getTourTransportation(TourTransportation.SHIP)
    );
    return transportations;
}