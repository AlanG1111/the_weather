import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from ".."
import { fetchData, showDay, showHours, showMinutes, showWeek } from "../store/actions"
import { IData } from "../store/helpers/IData"

const Weather: React.FC = () => {
    const dispatch = useDispatch()
    const data: IData | undefined = useSelector((state: RootState) => state.data?.data)
    const minutes: boolean | undefined = useSelector((state: RootState) => state.action.showMinutes)
    const hours: boolean | undefined = useSelector((state: RootState) => state.action.showHours)
    const day: boolean | undefined = useSelector((state: RootState) => state.action.showDay)
    const week: boolean | undefined = useSelector((state: RootState) => state.action.showWeek)
    
    const thisWeek = data?.daily.slice(0, 7)
    const thisDay = data?.daily[0]

    let theDate

    if(data?.daily[0].dt) {
        const res = new Date(data?.daily[0].dt)
        theDate = `${res.getDate()} / ${res.getMonth()+ 1}`
    }

    const showWeatherMin = (): void => {
        dispatch(showMinutes(true))
    }

    const showWeatherHours = (): void => {
        dispatch(showHours(true))
    }

    const showWeatherDay = (): void => {
        dispatch(showDay(true))
    }

    const showWeatherWeek = (): void => {
        dispatch(showWeek(true))
    }

    useEffect((): void => {
        dispatch(fetchData())
    }, [])
    
    return (
        <>
            <h1>The Weather of {theDate?.toString()}</h1>
            <div className="buttons-block">
                <button onClick={() => showWeatherMin()} className="btn btn-secondary">Minutes</button>
                <button onClick={() => showWeatherHours()} className="btn btn-secondary">Hour</button>
                <button onClick={() => showWeatherDay()} className="btn btn-secondary">Day</button>
                <button onClick={() => showWeatherWeek()} className="btn btn-secondary">Week</button>
            </div>
            <div className="weather-info">
                <h5>Awesome weather</h5>
                {minutes ? data?.minutely.map((obj) => {
                    const date = new Date(obj.dt)
                    const res = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                    return (
                        <ul key={obj.dt}>
                            <li>{res}</li>
                            <li>?????????????????????? ??????????????: {obj.precipitation}</li>
                        </ul> 
                    )
                }) : null}
                {hours ? data?.hourly.map((obj) => {
                    const date = new Date(obj.dt)
                    const res = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                    return (
                        <ul key={obj.dt}>
                            <li>{res}</li>
                            <li>?????????????????????? {obj.temp} F</li>
                            <li>???????????????? ?????????? {obj.wind_speed} m/s</li>
                            <li>?????????????????? {obj.visibility}??</li>
                        </ul>
                    )
                }) : null}
                {day ? <ul key={thisDay?.dt}>
                    <li>???????????????? ?????????? {thisDay?.wind_speed}</li>
                    <li>???????????? {thisDay?.weather[0].description}</li>
                    <li>?????????????????????? ?????????? {thisDay?.temp.morn}</li>
                    <li>?????????????????????? ???????? {thisDay?.temp.day}</li>
                    <li>?????????????????????? ?????????? {thisDay?.temp.night}</li>
                    <li>?????????? ???????? {thisDay?.dew_point}</li>
                </ul> : null}
                {week ? thisWeek?.map((obj) => {
                    // const date = new Date(obj.dt)
                    // console.log("date", date)
                    // const res = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                    return (
                        <ul key={obj.dt}>
                            <li>???????? {obj.dt}</li>
                            <li>?????????????????????? {obj.temp.day} F</li>
                            <li>???????????? {obj.weather[0].description}</li>
                            <li>???????????????????? {obj.clouds}%</li>
                        </ul>
                    )
                }) : null}
            </div>
        </>
    )
}

export default Weather
