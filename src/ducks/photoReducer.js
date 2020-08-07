const LOAD_START = 'walty-photo-engine/photos/LOAD_START';
const LOAD_REQUEST = 'walty-photo-engine/photos/LOAD_REQUEST';
const LOAD_SUCCESS = 'walty-photo-engine/photos/LOAD_SUCCESS';
const LOAD_FAILURE = 'walty-photo-engine/photos/LOAD_FAILURE';

const initialState = {
    photos: [],
    loading: false,
    error: null
}

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REQUEST:
            return{
                ...state,
                photos:[],
                loading:true,
                error:null
            }
        case LOAD_SUCCESS:
            return {
                ...state,
                photos:action.payload,
                loading:false,
                error:null
            };
        case LOAD_FAILURE:
            return{
                ...state,
                photos: [],
                loading:false,
                error: action.payload
            }
        default:
           return state;
    }
  }

export default photoReducer;

export const photosLoaded = (newPhotos) => {
    return {
        type: LOAD_SUCCESS,
        payload: newPhotos
    }
}
export const photosRequested = () => {
    return {
        type: LOAD_REQUEST
    }
}
export const photosError = (error) => {
    return {
        type: LOAD_FAILURE,
        payload: error
    }
}
export const photoLoadStart = (tags) => {
    return{
        type: LOAD_START,
        payload:tags
    }
}