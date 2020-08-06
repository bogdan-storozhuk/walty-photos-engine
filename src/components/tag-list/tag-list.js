import React,{Component} from 'react';
import {connect} from 'react-redux';
import Tag from '../tag/tag';

class TagList extends Component{
    render(){
       const {tags} = this.props;
        return (
            <div>
                    {
                        tags.map((tagInfo)=>{
                            return (
                                <Tag key={tagInfo.id} name={tagInfo.name}/>
                            );
                        })
                    }
            </div>
        );
    }
}

const mapStateToProps=({tags})=>{
    return{
        tags
    }
}

export default connect(mapStateToProps,null)(TagList);