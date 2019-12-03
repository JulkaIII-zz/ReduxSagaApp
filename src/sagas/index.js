// watcher saga -> actions -> worker saga
// takeEvery - to start a new workerSaga task on each dispatched 'Hello' action
// put - to dispatch action
import { takeEvery, put } from 'redux-saga/effects';

function* workerSaga() {
    console.log('hey from worker');
    yield put({type: 'ACTION_FROM_WORKER'});
}

// watcher saga
function* rootSaga() {
    yield takeEvery('Hello', workerSaga);
}

export default rootSaga;
