/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import thunk from 'redux-thunk'
import { logger } from '../utils/logger'
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import { Map } from "immutable";
import rootSaga from './sagas'

export default function configureStore(initialState = Map()) {
    let composeEnhancers = compose;

    // If Redux Dev Tools is installed, enable it
    /* istanbul ignore next */
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
        /* eslint-disable no-underscore-dangle */
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }

    const sagaMiddleware = createSagaMiddleware();
    const { run: runSaga } = sagaMiddleware;

    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [thunk, logger, sagaMiddleware];

    const enhancers = [
        applyMiddleware(...middlewares),
        createInjectorsEnhancer({
            createReducer,
            runSaga,
        }),
    ];

    const store = createStore(
        createReducer(),
        initialState,
        composeEnhancers(...enhancers)
    );

    runSaga(rootSaga)

    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            forceReducerReload(store);
        });
    }

    return store;
}