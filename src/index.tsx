import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './store/saga';
import { rootReducer } from './store/reducer';

const saga = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(saga))

export type RootState = ReturnType<typeof store.getState>

saga.run(sagaWatcher)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
