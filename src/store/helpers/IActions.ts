import { IData } from "./IData";
import { FETCH_DATA, SHOW_DATA, SHOW_DAY, SHOW_HOURS, SHOW_MINUTES, SHOW_WEEK } from "./constants";

export interface IFetchData  {
    type: typeof FETCH_DATA
}

export interface IShowData {
    type: typeof SHOW_DATA
    data?: IData
}

export interface IShowMinutes {
    type: typeof SHOW_MINUTES
    showMinutes?: boolean
}

export interface IShowHours {
    type: typeof SHOW_MINUTES
    showHours?: boolean
}

export interface IShowDay {
    type: typeof SHOW_DAY
    showDay?: boolean
}

export interface IShowWeek {
    type: typeof SHOW_WEEK
    showWeek?: boolean
}
