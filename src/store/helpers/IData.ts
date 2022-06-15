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

export interface IDaily {
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

export interface IFeels {
    day: number
    eve: number
    morn: number
    night: number
}

export interface IHourly {
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

export interface IMinutely {
    dt: number
    precipitation: number
}

export interface IWeather {
    description: string
    icon: string
    id: number
    main: string
}

export interface ITemp {
    day: number
    eve: number
    max: number
    min: number
    morn: number
    night: number
}
