import { IData } from "./helpers/IData"
import { FETCH_DATA, SHOW_DATA, SHOW_DAY, SHOW_HOURS, SHOW_MINUTES, SHOW_WEEK } from "./helpers/constants"
import { IFetchData, IShowData, IShowDay, IShowHours, IShowMinutes, IShowWeek } from "./helpers/IActions"

export function fetchData(): IFetchData {
    return {
        type: FETCH_DATA
    }
}

export function showData(payload: IData): IShowData {
    return {
        type: SHOW_DATA,
        data: payload
    }
}

export function showMinutes(showMinutes: boolean): IShowMinutes {
    return {
        type: SHOW_MINUTES,
        showMinutes: showMinutes,
    }
}

export function showHours(showHours: boolean): IShowHours {
    return {
        type: SHOW_HOURS,
        showHours: showHours,
    }
}

export function showDay(showDay: boolean): IShowDay {
    return {
        type: SHOW_DAY,
        showDay: showDay,
    }
}

export function showWeek(showWeek: boolean): IShowWeek {
    return {
        type: SHOW_WEEK,
        showWeek: showWeek,
    }
}
