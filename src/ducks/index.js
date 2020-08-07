import { combineReducers } from 'redux';

import tagReducer, {
    tagAdded,
    tagRemoved,
    loadTagsFromURL,
    lastSearchedTagAdded
} from './tagReducer';
import photoReducer, {
    photosLoaded,
    photosRequested,
    photosError,
    photoLoadStart
} from './photoReducer';


export default combineReducers({
    tagReducer,
    photoReducer
});

export {
    tagAdded,
    tagRemoved,
    loadTagsFromURL,
    lastSearchedTagAdded,
    photosLoaded,
    photosRequested,
    photosError,
    photoLoadStart
}