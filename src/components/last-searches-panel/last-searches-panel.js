import React,{Fragment} from 'react';
import {useSelector} from 'react-redux';
import Tag from '../tag/tag';

const LastSearchesPanel=()=>{
    const lastSearchedTags = useSelector(state=>state.lastSearchedTags);
    return (
        <Fragment>
            <p>3 last search</p>
            <div>
                {
                    lastSearchedTags.map((tagInfo)=>{
                        return (
                            <Tag key={tagInfo.id} name={tagInfo.name}/>
                        );
                    })
                }
            </div>
        </Fragment>)
}

export default LastSearchesPanel;