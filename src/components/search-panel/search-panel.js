import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import ReactTags from 'react-tag-autocomplete';

import './search-panel.css';

import {tagAdded, tagRemoved, lastSearchedTagAdded} from '../../actions';
import getSuggestions from './suggestions';

const StyledLink = styled(Link)`
    color: #008080de;
    font-weight: bold;
    border:1px solid #008080de;
    padding:10px;
    text-decoration: none;
    :hover{
        text-decoration: none;
        color:#008080;
        border:1px solid #008080de;
    }
`;

const SearchPanel = () => {
    const reactTags = React.createRef()
    const dispatch = useDispatch();
    const tags = useSelector(state => state.tags);
    const path=tags.reduce((sum,current)=>{
            return sum+`${current.name}/`
    },'/')

    const onAddition = (tag) => {
        dispatch(tagAdded(tag.name));
      }

    const onDelete = (i) => {
        dispatch(tagRemoved(i));
    }
    const onSearch = () =>{
        const lastTags = tags.slice(-3);
        dispatch(lastSearchedTagAdded(lastTags));
    }

    return(
        <div className="mt-3">
            <ReactTags
            ref={reactTags}
            tags={tags}
            suggestions={getSuggestions()}
            onDelete={onDelete}
            onAddition={onAddition} />
            <div className="text-center mt-4">
                <StyledLink onClick={onSearch} to={path}>
                    Search
                </StyledLink>
            </div>
        </div>
    );
}

export default SearchPanel;