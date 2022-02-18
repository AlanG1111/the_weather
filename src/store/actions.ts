import { IData } from "./reducer"

export const FETCH_DATA: string = 'FETCH_DATA'
export const SHOW_DATA: string = 'SHOW_DATA'
export const SHOW_MINUTES: string = 'SHOW_MINUTES'
export const SHOW_HOURS: string = 'SHOW_HOURS'
export const SHOW_DAY: string = 'SHOW_DAY'
export const SHOW_WEEK: string = 'SHOW_WEEK'

export interface IFetchData  {
    type: typeof FETCH_DATA
}

export interface IShowData {
    type: typeof SHOW_DATA
    data: IData
}

export interface IShowMinutes {
    type: typeof SHOW_MINUTES
    showMinutes: boolean
}

export interface IShowHours {
    type: typeof SHOW_MINUTES
    showHours: boolean
}

export interface IShowDay {
    type: typeof SHOW_DAY
    showDay: boolean
}

export interface IShowWeek {
    type: typeof SHOW_WEEK
    showWeek: boolean
}

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
        showMinutes: showMinutes
    }
}

export function showHours(showHours: boolean): IShowHours {
    return {
        type: SHOW_HOURS,
        showHours: showHours
    }
}

export function showDay(showDay: boolean): IShowDay {
    return {
        type: SHOW_DAY,
        showDay: showDay
    }
}

export function showWeek(showWeek: boolean): IShowWeek {
    return {
        type: SHOW_WEEK,
        showWeek: showWeek
    }
}
