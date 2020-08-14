import {
  photoReducer,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILURE,
} from '../../ducks/';

describe('Photo reducer', () => {
  it('Should return default state without any changes done to it', () => {
    const newState = photoReducer(undefined, {});
    expect(newState).toEqual({
      photos: [],
      loading: false,
      error: null,
      searchedPhoto: null,
    });
  });

  it(`Should receive new state if receiving type: ${LOAD_REQUEST} after situation without error`, () => {
    const newState = photoReducer(undefined, {
      type: LOAD_REQUEST,
    });
    expect(newState).toEqual({
      photos: [],
      loading: true,
      error: null,
      searchedPhoto: null,
    });
  });

  it(`Should receive new state if receiving type: ${LOAD_REQUEST} after situation with error`, () => {
    const initialStateWithError = {
      photos: [],
      loading: false,
      error: 'Unknown error',
    };
    const newState = photoReducer(initialStateWithError, {
      type: LOAD_REQUEST,
    });
    expect(newState).toEqual({
      ...initialStateWithError,
      loading: true,
      error: null,
    });
  });

  it(`Should receive new state if receiving type: ${LOAD_SUCCESS}`, () => {
    const initialState = {
      photos: [],
      loading: true,
      error: null,
    };
    const newPhotos = ['doesnt matter what is in here'];

    const newState = photoReducer(initialState, {
      type: LOAD_SUCCESS,
      payload: newPhotos,
    });
    expect(newState).toEqual({
      ...initialState,
      photos: newPhotos,
      loading: false,
    });
  });

  it(`Should receive new state if receiving type: ${LOAD_FAILURE}`, () => {
    const initialState = {
      photos: [],
      loading: true,
      error: null,
    };
    const error = 'Unknown error';

    const newState = photoReducer(initialState, {
      type: LOAD_FAILURE,
      payload: error,
    });
    expect(newState).toEqual({
      ...initialState,
      loading: false,
      error,
    });
  });
});
