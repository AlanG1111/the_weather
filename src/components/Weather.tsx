import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from ".."
import { fetchData } from "../store/actions"
import { IData } from "../store/reducer"

const Weather: React.FC = () => {
    const dispatch = useDispatch()
    const data: IData | undefined = useSelector((state: RootState) => state.data?.data)

    let theDate

    if(data?.daily[0].dt) {
        const res = new Date(data?.daily[0].dt)
        theDate = `${res.getDate()} / ${res.getMonth()+ 1}`
    }

    const showWeatherMin = (): void => {
        dispatch(fetchData())

    }

    useEffect((): void => {
        dispatch(fetchData())
    }, [])
    return (
        <>
            <h1>The Weather of {theDate?.toString()}</h1>
            <div className="buttons-block">
                <button onClick={() => showWeatherMin} className="btn btn-secondary">Minute</button>
                <button className="btn btn-secondary">Hour</button>
                <button className="btn btn-secondary">Day</button>
                <button className="btn btn-secondary">Week</button>
            </div>
            <div className="weather-info">
                {/* {data?.minutely.map((obj) => {
                    const date = new Date(obj.dt)
                    console.log("date",obj)
                    const res = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                    return (
                        <ul key={obj.dt}>
                            <li>{res}</li>
                            <li>Вероятность осадков: {obj.precipitation}</li>
                        </ul> 
                    )
                })} */}
            </div>
        </>
    )
}

export default Weather
