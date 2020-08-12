export const TAG_ADD = 'walty-photo-engine/tags/TAG_ADD';
export const TAG_REMOVE = 'walty-photo-engine/tags/TAG_REMOVE';
export const TAGS_LOADED_FROM_URL =
  'walty-photo-engine/tags/TAGS_LOADED_FROM_URL';
export const LAST_SEARCHED_TAGS_ADDED =
  'walty-photo-engine/tags/LAST_SEARCHED_TAGS_ADDED';

const initialState = {
  tags: [],
  lastSearchedTags: [],
};

const tagReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAG_ADD:
      const newTag = action.payload;
      if (state.tags.find((element) => newTag.name === element.name)) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        tags: [...state.tags, newTag],
      };
    case TAG_REMOVE:
      const numberInTagArray = action.payload;
      return {
        ...state,
        tags: [
          ...state.tags.slice(0, numberInTagArray),
          ...state.tags.slice(numberInTagArray + 1),
        ],
      };
    case TAGS_LOADED_FROM_URL:
      return {
        ...state,
        tags: action.payload,
      };
    case LAST_SEARCHED_TAGS_ADDED:
      const lastSearchedTags = action.payload;
      return {
        ...state,
        lastSearchedTags,
      };
    default:
      return state;
  }
};

export default tagReducer;

export const tagAdded = (tag) => ({
  type: TAG_ADD,
  payload: tag,
});

export const tagRemoved = (numberInTagArray) => ({
  type: TAG_REMOVE,
  payload: numberInTagArray,
});

export const loadTagsFromURL = (tags) => ({
  type: TAGS_LOADED_FROM_URL,
  payload: tags,
});

export const lastSearchedTagAdded = (tags) => ({
  type: LAST_SEARCHED_TAGS_ADDED,
  payload: tags,
});
