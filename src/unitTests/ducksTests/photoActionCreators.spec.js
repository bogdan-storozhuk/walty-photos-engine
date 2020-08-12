import {
  photosLoaded,
  photosRequested,
  photosError,
  photoLoadStart,
  LOAD_START,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILURE,
} from '../../ducks/';

describe('Photo ActionCreators', () => {
  it('photoLoadStart(): Should attach tags data to start searching for images', () => {
    const tags = 'test data';
    const expectedAction = {
      type: LOAD_START,
      payload: tags,
    };
    expect(photoLoadStart(tags)).toEqual(expectedAction);
  });

  it('photosRequested(): Should create an action to set Loading', () => {
    const expectedAction = {
      type: LOAD_REQUEST,
    };
    expect(photosRequested()).toEqual(expectedAction);
  });

  it('photosLoaded(): Should attach photo data', () => {
    const newPhotos = 'test data';
    const expectedAction = {
      type: LOAD_SUCCESS,
      payload: newPhotos,
    };
    expect(photosLoaded(newPhotos)).toEqual(expectedAction);
  });

  it('photosError(): Should attach error data', () => {
    const error = 'test data';
    const expectedAction = {
      type: LOAD_FAILURE,
      payload: error,
    };
    expect(photosError(error)).toEqual(expectedAction);
  });
});
