import React, {Component} from 'react';
import {connect} from 'react-redux';
import Container from 'react-bootstrap/Container';

import withPixbayApi from '../hoc/with-pixbay-api';
import {fetchPhotos,loadTagsFromURL} from '../../actions/'
import SearchPanel from '../search-panel/search-panel';
import LastSearchesPanel from '../last-searches-panel/last-searches-panel'
import PhotoContainer from '../gallery/gallery';
import {deleteUndefinedValuesFromObject,
        transformObjectIntoArray} from '../../utils/utils'

class MainPage extends Component {

    componentDidMount(){
        const {tags, loadTagsFromURL, fetchPhotos} = this.props;
        if(tags){
            deleteUndefinedValuesFromObject(tags);
            const tagArray = transformObjectIntoArray(tags);
            loadTagsFromURL(tagArray);
            fetchPhotos(tagArray);
        }
    }

    componentDidUpdate(prevProps){
        const {tags, loadTagsFromURL, fetchPhotos} = this.props;
        if(tags!==prevProps.tags && tags){
            deleteUndefinedValuesFromObject(tags);
            const tagArray = transformObjectIntoArray(tags);
            loadTagsFromURL(tagArray);
            fetchPhotos(tagArray);
        }
    }

    render(){
        return(
            <Container>
                <SearchPanel/>
                <PhotoContainer/>
                <LastSearchesPanel/>
            </Container> 
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const {pixbayApi} = ownProps;
    return {
        fetchPhotos: fetchPhotos(pixbayApi, dispatch),
        loadTagsFromURL: (tags)=>dispatch(loadTagsFromURL(tags))
    }
}


export default withPixbayApi()(connect(null,mapDispatchToProps)(MainPage));