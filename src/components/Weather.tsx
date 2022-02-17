import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchData } from "../store/actions"

const Weather: React.FC = () => {
    const dispatch = useDispatch()
    const showWeather = () => {
        dispatch(fetchData())
    }

    useEffect(() => {
        dispatch(fetchData())
    }, [])
    return (
        <>
            <h1>The Weather</h1>
            <div className="buttons-block">
                <button onClick={() => showWeather} className="btn btn-secondary">Minute</button>
                <button className="btn btn-secondary">Hour</button>
                <button className="btn btn-secondary">Day</button>
                <button className="btn btn-secondary">Week</button>
            </div>
        </>
    )
}

export default Weather
