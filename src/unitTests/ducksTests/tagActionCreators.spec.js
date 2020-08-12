import {
  tagAdded,
  tagRemoved,
  loadTagsFromURL,
  lastSearchedTagAdded,
  TAG_ADD,
  TAG_REMOVE,
  TAGS_LOADED_FROM_URL,
  LAST_SEARCHED_TAGS_ADDED,
} from '../../ducks/';

describe('Tag ActionCreators', () => {
  it('tagAdded(): Should attach tag data', () => {
    const tag = 'test data';
    const expectedAction = {
      type: TAG_ADD,
      payload: tag,
    };
    expect(tagAdded(tag)).toEqual(expectedAction);
  });

  it('tagRemoved(): Should attach number in tag array data', () => {
    const numberInTagArray = 1;
    const expectedAction = {
      type: TAG_REMOVE,
      payload: numberInTagArray,
    };
    expect(tagRemoved(numberInTagArray)).toEqual(expectedAction);
  });

  it('loadTagsFromURL(): Should attach tags data', () => {
    const tags = 'test data';
    const expectedAction = {
      type: TAGS_LOADED_FROM_URL,
      payload: tags,
    };
    expect(loadTagsFromURL(tags)).toEqual(expectedAction);
  });

  it('lastSearchedTagAdded(): Should attach last searched tags data', () => {
    const lastSearchedTags = 'test data';
    const expectedAction = {
      type: LAST_SEARCHED_TAGS_ADDED,
      payload: lastSearchedTags,
    };
    expect(lastSearchedTagAdded(lastSearchedTags)).toEqual(expectedAction);
  });
});
