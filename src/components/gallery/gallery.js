import React from 'react';
import {useSelector} from 'react-redux';

import {GalleryItem} from '../';
import {Spinner} from '../';
import {ErrorIndicator} from '../';

const Gallery = ({photos}) =>{
    return(
        <div className="row mt-3">
                    {
                        photos.map((photo)=>{
                            return (
                                <GalleryItem key={photo.id} photo={photo}/>
                            );
                        })
                    }
        </div>
    );
}

const GalleryContainer = () => {
    const photos = useSelector(state => state.photoReducer.photos),
        loading = useSelector(state => state.photoReducer.loading),
        error = useSelector(state => state.photoReducer.error);
        if(loading){
            return <Spinner/>
        }

        if(error){
            return <ErrorIndicator/>
        }

        return <Gallery photos={photos}/>;
}

export default GalleryContainer;