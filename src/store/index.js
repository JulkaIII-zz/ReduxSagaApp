import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleWare from 'redux-saga';

import rootReducer from "../reducers";
import rootSaga from '../sagas';

const configureStore = () => {
    // create saga middleware
    const sagaMiddleware = createSagaMiddleWare();

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
        ),
    );
    // run the saga
    sagaMiddleware.run(rootSaga);
    store.dispatch({type: 'Hello'});
    return store;
};



export default configureStore;
