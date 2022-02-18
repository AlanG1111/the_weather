import { SHOW_DATA, SHOW_DAY, SHOW_HOURS, SHOW_MINUTES, SHOW_WEEK } from "./helpers/constants"
import { IState } from "./helpers/IData"


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
