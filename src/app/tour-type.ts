//export namespace TourType{
    export enum TourType {
        CAMPING,
        WALKING
    }
    export function getTourType(type: TourType): {value: string, imgUrl: string} {
        switch (type) {
            case TourType.CAMPING: {
                return {
                    value: 'Camping',
                    imgUrl: '/assets/tour-type/camping.svg'
                }
            }
            case TourType.WALKING:{
                return {
                    value: 'Walking',
                    imgUrl: '/assets/tour-type/footprint.svg'
                }
            }
            default: {
                return {
                    value: 'Tourism',
                    imgUrl: '/assets/tour-type/photo.svg'
                }
            }
        }
    }
    export function getAllTourType(): {value: string, imgUrl: string}[] {
        let types = [];
        types.push(getTourType(TourType.CAMPING));
        types.push(getTourType(TourType.WALKING));
        return types;
    }
//}