import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import tagReducer, {
  tagAdded,
  tagRemoved,
  loadTagsFromURL,
  lastSearchedTagAdded,
} from './tagReducer';
import photoReducer, {
  photosLoaded,
  photosRequested,
  photosError,
  photoLoadStart,
  watchFetchPhotos,
} from './photoReducer';

export default combineReducers({
  tagReducer,
  photoReducer,
});

export {
  tagAdded,
  tagRemoved,
  loadTagsFromURL,
  lastSearchedTagAdded,
  photosLoaded,
  photosRequested,
  photosError,
  photoLoadStart,
};

export function* rootSaga() {
  yield all([watchFetchPhotos()]);
}
