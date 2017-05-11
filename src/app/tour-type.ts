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
//}