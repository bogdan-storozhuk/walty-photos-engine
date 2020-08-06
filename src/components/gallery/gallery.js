import React, {Component} from 'react';
import {connect} from 'react-redux';

import GalleryItem from '../gallery-item/gallery-item';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

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

class GalleryContainer extends Component{
    
    render(){
        const {photos, loading, error} = this.props;
        if(loading){
            return <Spinner/>
        }

        if(error){
            return <ErrorIndicator/>
        }

        return <Gallery photos={photos}/>;
    }
}

const mapStateToProps = ({photos, loading, error}) =>{
    return {
        photos,
        loading,
        error
    }
}
export default connect(mapStateToProps)(GalleryContainer);