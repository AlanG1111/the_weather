import { IFetchData } from "./actions"

export interface IState {
    data: null | {}
}
const initialState:IState = {
    data: null
}

export const rootReducer = (state: IState = initialState, action: IFetchData): IState => {
    return {
        ...state,
        data: action
    }
}