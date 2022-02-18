import { act } from "react-dom/test-utils"
import { IShowData, IShowMinutes, SHOW_DATA, SHOW_DAY, SHOW_HOURS, SHOW_MINUTES, SHOW_WEEK } from "./actions"

export interface IState {
    data: null | { type: string, data?: IData }
    action: {
        showMinutes?: boolean
        showHours?: boolean
        showDay?: boolean
        showWeek?: boolean
    }
}

export interface IData {
    daily: Array<IDaily>
    hourly:Array<IHourly>
    lat: number
    lon: number
    minutely: Array<IMinutely>
    timezone: string
    tymezone_offset: number
}

interface IDaily {
    clouds: number
    dew_point: number
    dt: number | undefined
    feels_like: IFeels
    humidity: number
    moon_phase: number
    moonrise: number
    moonset: number
    pop: number
    pressure: number
    sunrise: number
    sunset: number
    temp: ITemp
    uvi: number
    weather: Array<IWeather>
    wind_deg: number
    wind_gust: number
    wind_speed: number
}

interface IFeels {
    day: number
    eve: number
    morn: number
    night: number
}

interface IHourly {
    clouds: number
    dew_point: number
    dt: number
    feels_like: number
    humidity: number
    pop: number
    pressure: number
    temp: number
    uvi: number
    visibility: number
    weather: Array<IWeather>
    wind_deg: number
    wind_gust: number
    wind_speed: number
}

interface IMinutely {
    dt: number
    precipitation: number
}

interface IWeather {
    description: string
    icon: string
    id: number
    main: string
}

interface ITemp {
    day: number
    eve: number
    max: number
    min: number
    morn: number
    night: number
}

const initialState: IState = {
    data: null,
    action: {
        showMinutes: false,
        showHours: false,
        showDay: false,
        showWeek: false,
    }
}

export const rootReducer = (state: IState = initialState, action: any): IState => {
    if(action.type === SHOW_DATA) {
        return {
            ...state,
            data: action
        }
    }

    if(action.type === SHOW_MINUTES) {
        console.log("act", action)
        return {
            ...state,
            action: {
                showMinutes: action.showMinutes
            }
        }
    }

    if(action.type === SHOW_HOURS) {
        console.log("act", action)
        return {
            ...state,
            action: {
                showHours: action.showHours
            }
        }
    }

    if(action.type === SHOW_DAY) {
        return {
            ...state,
            action: {
                showDay: action.showDay
            }
        }
    }

    if(action.type === SHOW_WEEK) {
        return {
            ...state,
            action: {
                showWeek: action.showWeek
            }
        }
    }

    return {
        ...state
    }
}
