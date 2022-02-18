import { IData } from "./reducer"

export const FETCH_DATA: string = 'FETCH_DATA'
const SHOW_DATA: string = 'SHOW_DATA'

export interface IFetchData  {
    type: typeof FETCH_DATA
}

export interface IShowData {
    type: typeof SHOW_DATA
    data: IData
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
