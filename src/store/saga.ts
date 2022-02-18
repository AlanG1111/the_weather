import { takeEvery, put, call} from 'redux-saga/effects'
import { showData } from './actions';
import { FETCH_DATA } from './helpers/constants';
import { IData } from './helpers/IData'


const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current&appid=f2444907376f4bbf78e2af4a9abbbec2'

export function* sagaWatcher() {
    yield takeEvery(FETCH_DATA, sagaWorker)
}

function* sagaWorker() {
    try {
        const payload: IData = yield call(fetchData)
        yield put(showData(payload))
    } catch (e) {
        throw new Error(`${e}`)
    }
}

const fetchData = async function() {
    const response = await fetch(url)
    .then((response) => {
    return response.json();
  })
    return response
}
