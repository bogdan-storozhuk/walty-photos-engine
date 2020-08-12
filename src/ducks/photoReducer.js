import { call, put, takeEvery } from 'redux-saga/effects';

const _apiBase = 'https://pixabay.com/api';
const _apiKey = '17756679-c2c07b5492052af8ae388b0f5';

const LOAD_START = 'walty-photo-engine/photos/LOAD_START';
const LOAD_REQUEST = 'walty-photo-engine/photos/LOAD_REQUEST';
const LOAD_SUCCESS = 'walty-photo-engine/photos/LOAD_SUCCESS';
const LOAD_FAILURE = 'walty-photo-engine/photos/LOAD_FAILURE';

const initialState = {
  photos: [],
  loading: false,
  error: null,
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REQUEST:
      return {
        ...state,
        photos: [],
        loading: true,
        error: null,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_FAILURE:
      return {
        ...state,
        photos: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default photoReducer;

export const photosLoaded = (newPhotos) => ({
  type: LOAD_SUCCESS,
  payload: newPhotos,
});
export const photosRequested = () => ({
  type: LOAD_REQUEST,
});
export const photosError = (error) => ({
  type: LOAD_FAILURE,
  payload: error,
});
export const photoLoadStart = (tags) => ({
  type: LOAD_START,
  payload: tags,
});

function* fetchPhotosAsync(action) {
  try {
    const tags = action.payload;
    yield put(photosRequested());
    const data = yield call(async () => {
      const tagsURL = tags.reduce((sum, current) => {
        return sum + `${current.name} `;
      }, '');
      const res = await fetch(`${_apiBase}/?key=${_apiKey}&q=${tagsURL}&image_type=photo&
            per_page=${20}&safesearch=true`);
      return await res.json();
    });
    yield put(photosLoaded(data.hits));
  } catch (error) {
    yield put(photosError(error));
  }
}

export function* watchFetchPhotos() {
  yield takeEvery(LOAD_START, fetchPhotosAsync);
}
