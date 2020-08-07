import React from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';

import {tagAdded} from '../../ducks/';

const Span=styled.span`
:hover{
    cursor: pointer
}
`

const Tag=(tag)=>{
    const dispatch = useDispatch();

    const onAddition = (tag) => {
        dispatch(tagAdded(tag.name));
    }

    return(<Span onClick={()=>onAddition(tag)} className="border p-2 mr-2">{tag.name}</Span>)
}

export default Tag; 