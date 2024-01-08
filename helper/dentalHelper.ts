import { ToothLocations } from "src/models/enum/dental"
import { toPersianDigits } from "./dateTimeHelper"

export const toPersianToothLocation = (location: ToothLocations, number?: string) => {
    switch (location) {
        case ToothLocations.TOP_RIGHT:
            return `فک بالا سمت راست دندان شماره ${toPersianDigits(number + '')}`
        case ToothLocations.TOP_LEFT:
            return `فک بالا سمت چپ دندان شماره ${toPersianDigits(number + '')}`
        case ToothLocations.BOTTOM_LEFT:
            return `فک پایین سمت چپ دندان شماره ${toPersianDigits(number + '')}`
        case ToothLocations.BOTTOM_RIGHT:
            return `فک پایین سمت راست دندان شماره ${toPersianDigits(number + '')}`

        case ToothLocations.TOP: return "فک بالا"
        case ToothLocations.BUTTOM: return "فک پایین"
        case ToothLocations.ALL: return "فک بالا و پایین"

        default:
            return ''
    }
}