import { takeEvery, put, call} from 'redux-saga/effects'
import { FETCH_DATA, showData } from './actions';
import { IState } from './reducer';


const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=50.27&lon=-30.31&exclude=current,minutely,hourly,daily&appid=f2444907376f4bbf78e2af4a9abbbec2'

export function* sagaWatcher() {
    yield takeEvery(FETCH_DATA, sagaWorker)
}

function* sagaWorker() {
    try {
        const payload: IState = yield call(fetchData)
        console.log('payload', payload)
        yield put(showData(payload))
    } catch (e) {
        throw new Error(`${e}`)
    }
}

function fetchData() {
  fetch(url)
  .then((response) => {
    console.log('response',response)
    return response.json();
  })
}
