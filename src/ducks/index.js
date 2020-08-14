import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import tagReducer, {
  tagAdded,
  tagRemoved,
  loadTagsFromURL,
  lastSearchedTagAdded,
  TAG_ADD,
  TAG_REMOVE,
  TAGS_LOADED_FROM_URL,
  LAST_SEARCHED_TAGS_ADDED,
} from './tagReducer';
import photoReducer, {
  photosLoaded,
  photosRequested,
  photosError,
  photosLoadStart,
  singlePhotoStart,
  watchFetchPhotos,
  watchFetchSinglePhoto,
  LOAD_START,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILURE,
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
  photosLoadStart,
  singlePhotoStart,
  photoReducer,
  tagReducer,
  LOAD_START,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILURE,
  TAG_ADD,
  TAG_REMOVE,
  TAGS_LOADED_FROM_URL,
  LAST_SEARCHED_TAGS_ADDED,
};

export function* rootSaga() {
  yield all([watchFetchPhotos(), watchFetchSinglePhoto()]);
}
