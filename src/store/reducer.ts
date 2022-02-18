import { IShowData } from "./actions"

export interface IState {
    data: null | { type: string, data?: IData }
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
    [key: string]:number | Array<IWeather>
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

const initialState:IState = {
    data: null
}

export const rootReducer = (state: IState = initialState, action: IShowData): IState => {
    return {
        ...state,
        data: action
    }
}
