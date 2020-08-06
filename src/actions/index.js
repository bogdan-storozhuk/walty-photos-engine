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

const tagAdded = (name) =>{
    return {
        type:'TAG_ADDED',
        payload:{
            name,
            id:Date.now()+Math.floor(Math.random()*1000)
        }
    }
}

const loadTagsFromURL = (tags) =>{
    return {
        type: 'LOAD_TAGS_FROM_URL',
        payload: tags
    }
}

const fetchPhotos = (pixbayApi,dispatch) => (tags) => {
    dispatch(photosRequested());
    pixbayApi.getPhotos(tags)
        .then(data => dispatch(photosLoaded(data.hits)))
        .catch((error)=>dispatch(photosError(error)));
}

export {
    fetchPhotos,
    tagAdded,
    loadTagsFromURL
};