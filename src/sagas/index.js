// watcher saga -> actions -> worker saga
// takeEvery - to start a new workerSaga task on each dispatched 'Hello' action; action is handled every time. (non-blocking effect)
// take - to start a new workerSaga task on dispatched 'Login' action; action is handled once.
// put - to dispatch action
import imagesSaga from './imagesSaga';

// import { takeEvery } from 'redux-saga/effects';

// import { IMAGES } from '../constants';

// function* handleImagesLoad() {
//     console.log('handleImagesLoad Fetching images from unsplash');
// }

// // watcher saga 
// function* rootSaga() {
//     yield takeEvery(IMAGES.LOAD, handleImagesLoad);
// }

// export default rootSaga;

export default imagesSaga;
