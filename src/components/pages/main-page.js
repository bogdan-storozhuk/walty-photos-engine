import React, { useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Container from 'react-bootstrap/Container';

import {loadTagsFromURL, photoLoadStart} from '../../ducks/';
import {SearchPanel} from '../';
import {LastSearchesPanel} from '../';
import {Gallery} from '../';
import {deleteUndefinedValuesFromObject,
        transformObjectIntoArray} from '../../utils/utils'


const MainPage = ({tags}) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        if(tags){
            deleteUndefinedValuesFromObject(tags);
            const tagArray = transformObjectIntoArray(tags);
            dispatch(loadTagsFromURL(tagArray));
            dispatch(photoLoadStart(tagArray));
        }
    },[dispatch, tags])
    return(
        <Container>
            <SearchPanel/>
            <LastSearchesPanel/>
            <Gallery/>
        </Container> 
    );
}

export default MainPage;
