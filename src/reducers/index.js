

const initialState = {
    photos: [],
    loading: false,
    error: null,
    tags:[],
    lastSearchedTags:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PHOTOS_REQUEST':
            return{
                ...state,
                photos:[],
                loading:true,
                error:null
            }
        case 'FETCH_PHOTOS_SUCCESS':
            return {
                ...state,
                photos:action.payload,
                loading:false,
                error:null
            };
        case 'FETCH_PHOTOS_FAILURE':
            return{
                ...state,
                photos: [],
                loading:false,
                error: action.payload
            }
        case 'TAG_ADDED':
            const newTag = action.payload;
            return{
                ...state,
                tags:[...state.tags,newTag]
            }
        case 'TAG_REMOVED':
            const numberInTagArray = action.payload;
            return{
                ...state,
                tags:[...state.tags.slice(0,numberInTagArray),
                      ...state.tags.slice(numberInTagArray+1)]
            }
        case 'LAST_SEARCHED_TAGS_ADDED':
            const lastSearchedTags = action.payload;
            console.log(lastSearchedTags);
            return{
                ...state,
                lastSearchedTags
            }
        case 'LOAD_TAGS_FROM_URL':
            return{
                ...state,
                tags: action.payload
            }
            default:
                return state;
    }
}

export default reducer;