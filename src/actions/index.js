const photosLoaded = (newPhotos) => {
    return {
        type: 'FETCH_PHOTOS_SUCCESS',
        payload: newPhotos
    }
}
const photosRequested = () => {
    return {
        type:'FETCH_PHOTOS_REQUEST'
    }
}
const photosError = (error) => {
    return {
        type:'FETCH_PHOTOS_FAILURE',
        payload: error
    }
}
const photoLoadStart = (tags) => {
    return{
        type:"FETCH_PHOTOS_START",
        payload:tags
    }
}

const tagAdded = (name) =>{
    return {
        type:'TAG_ADDED',
        payload:{
            name,
            id:Date.now()+Math.floor(Math.random()*1000)
        }
    }
}

const tagRemoved = (numberInTagArray) => {
    return {
        type: 'TAG_REMOVED',
        payload: numberInTagArray
    }
}

const lastSearchedTagAdded = (tags) => {
    return {
        type: 'LAST_SEARCHED_TAGS_ADDED',
        payload: tags
    }
}

const loadTagsFromURL = (tags) =>{
    return {
        type: 'LOAD_TAGS_FROM_URL',
        payload: tags
    }
}

export {
    photoLoadStart,
    photosRequested,
    photosLoaded,
    photosError,
    tagAdded,
    tagRemoved,
    lastSearchedTagAdded,
    loadTagsFromURL
};