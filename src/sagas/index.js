import {
    call,
    put,
    takeEvery,
    all
} from 'redux-saga/effects';

import {
    photosLoaded,
    photosRequested,
    photosError
} from '../actions/';

const _apiBase = 'https://pixabay.com/api';
const _apiKey = '17756679-c2c07b5492052af8ae388b0f5';

function* watchFetchPhotos() {
    yield takeEvery('FETCH_PHOTOS_START', fetchPhotosAsync);
}

function* fetchPhotosAsync(action) {
    try {
        const tags =action.payload;
        yield put(photosRequested());
        const data = yield call(async () => {
            const tagsURL=tags.reduce((sum,current)=>{
                return sum+`${current.name} `
            },'');
            const res = await fetch(`${_apiBase}/?key=${_apiKey}&q=${tagsURL}&image_type=photo&
            per_page=${20}&safesearch=true`);
            return await res.json();
          }
        );
        yield put(photosLoaded(data.hits));
      } catch (error) {
        yield put(photosError(error));
      }
}

export default function* rootSaga() {
    yield all([
        watchFetchPhotos()
    ])
};