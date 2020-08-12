import {
  tagReducer,
  TAG_ADD,
  TAG_REMOVE,
  TAGS_LOADED_FROM_URL,
  LAST_SEARCHED_TAGS_ADDED,
} from '../../ducks/';

describe('Photo reducer', () => {
  it('Should return default state without any changes done to it', () => {
    const newState = tagReducer(undefined, {});

    expect(newState).toEqual({
      tags: [],
      lastSearchedTags: [],
    });
  });

  it(`Should receive new state if receiving type: ${TAG_ADD} and tags array is empty`, () => {
    const newTag = { name: 'Dog', id: 1597236642172 };

    const newState = tagReducer(undefined, {
      type: TAG_ADD,
      payload: newTag,
    });

    expect(newState).toEqual({
      tags: [{ name: 'Dog', id: 1597236642172 }],
      lastSearchedTags: [],
    });
  });

  it(`Should receive new state if receiving type: ${TAG_ADD} and tags array is NOT empty`, () => {
    const initialTags = [{ name: 'Cat', id: 1597236980458 }];
    const newTag = { name: 'Dog', id: 1597236642172 };
    const initialState = {
      tags: initialTags,
      lastSearchedTags: [],
    };

    const newState = tagReducer(initialState, {
      type: TAG_ADD,
      payload: newTag,
    });

    expect(newState).toEqual({
      ...initialState,
      tags: [...initialTags, newTag],
    });
  });

  it(`Should receive state without changes if receiving type: ${TAG_ADD} and tag is already present in tags array`, () => {
    const initialTags = [{ name: 'Cat', id: 1597236980458 }];
    const newTag = { name: 'Cat', id: 1597236642172 };
    const initialState = {
      tags: initialTags,
      lastSearchedTags: [],
    };

    const newState = tagReducer(initialState, {
      type: TAG_ADD,
      payload: newTag,
    });

    expect(newState).toEqual({
      ...initialState,
      tags: [...initialTags],
    });
  });

  it(`Should receive new state if receiving type: ${TAG_REMOVE}
   and tag is being removed from the start of 1 element array`, () => {
    const initialState = {
      tags: [{ name: 'Cat', id: 1597236980458 }],
      lastSearchedTags: [],
    };
    const numberInTagArray = 0;

    const newState = tagReducer(initialState, {
      type: TAG_REMOVE,
      payload: numberInTagArray,
    });

    expect(newState).toEqual({
      ...initialState,
      tags: [],
    });
  });

  it(`Should receive new state if receiving type: ${TAG_REMOVE}
   and tag is being removed from the middle`, () => {
    const initialState = {
      tags: [
        { name: 'Cat', id: 1597236980458 },
        { name: 'Dog', id: 1597236980459 },
        { name: 'Home', id: 1597236980450 },
      ],
      lastSearchedTags: [],
    };
    const numberInTagArray = 1;

    const newState = tagReducer(initialState, {
      type: TAG_REMOVE,
      payload: numberInTagArray,
    });

    expect(newState).toEqual({
      ...initialState,
      tags: [
        { name: 'Cat', id: 1597236980458 },
        { name: 'Home', id: 1597236980450 },
      ],
    });
  });

  it(`Should receive new state if receiving type: ${TAG_REMOVE}
   and tag is being removed from the end`, () => {
    const initialState = {
      tags: [
        { name: 'Cat', id: 1597236980458 },
        { name: 'Dog', id: 1597236980459 },
      ],
      lastSearchedTags: [],
    };
    const numberInTagArray = 1;

    const newState = tagReducer(initialState, {
      type: TAG_REMOVE,
      payload: numberInTagArray,
    });

    expect(newState).toEqual({
      ...initialState,
      tags: [{ name: 'Cat', id: 1597236980458 }],
    });
  });

  it(`Should receive new state if receiving type: ${TAGS_LOADED_FROM_URL}`, () => {
    const loadedTags = [
      { name: 'Cat', id: 1597236980458 },
      { name: 'Dog', id: 1597236980459 },
    ];

    const newState = tagReducer(undefined, {
      type: TAGS_LOADED_FROM_URL,
      payload: loadedTags,
    });

    expect(newState).toEqual({
      lastSearchedTags: [],
      tags: [...loadedTags],
    });
  });

  it(`Should receive new state if receiving type: ${LAST_SEARCHED_TAGS_ADDED}`, () => {
    const lastSearchedTags = [
      { name: 'Cat', id: 1597236980458 },
      { name: 'Dog', id: 1597236980459 },
    ];

    const newState = tagReducer(undefined, {
      type: LAST_SEARCHED_TAGS_ADDED,
      payload: lastSearchedTags,
    });

    expect(newState).toEqual({
      lastSearchedTags,
      tags: [],
    });
  });
});
