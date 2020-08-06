import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

import {tagAdded} from '../../actions';
import TagList from '../tag-list/tag-list';

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

class SearchPanel extends Component{

    state={
        label:''
    }

     onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
     }

     onSubmit = (e) => {
         e.preventDefault();
         if(this.state.label.length===0){
             return;
         }
         const {label} = this.state;
         this.props.onAddedToTags(label);
         this.setState({
            label:''
        });
     }

    render(){
        const {tags} = this.props;
        const path=tags.reduce((sum,current)=>{
            return sum+`${current.name}/`
        },'/')
        return(
        <Form onSubmit={this.onSubmit} className="mt-3">
            <Form.Group>
                <Form.Control value={this.state.label} onChange={this.onLabelChange} size="lg" type="text" placeholder="Enter tags"/>
            </Form.Group>
            <div className="m-2">
                <TagList/>
            </div>
            <div className="text-center">
                    <StyledLink to={path}>
                        Search
                    </StyledLink>
            </div>
        </Form>);
    }
}

const mapStateToProps = ({tags}) => {
    return {
        tags
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddedToTags: (label) =>{dispatch(tagAdded(label))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchPanel);