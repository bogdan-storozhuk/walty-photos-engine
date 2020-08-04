import React,{Component} from 'react';
import styled from 'styled-components';

import PixbayService from '../../api/pixbay-service';


const Image=styled.img`
width: 100%;
height: 100%;
`


export default class Gallery extends Component{
    state={photos:[]};
    componentDidMount(){
       const service=new PixbayService();
        service.getPhotos().then(data=>{
            this.setState({
                photos:data.hits
            })
        });
    }
    
    render(){
        console.log(this.state.photos);
        const elements=this.state.photos.map((item)=>{
            const {largeImageURL,id}=item;
            return (
                <div key={id} className="col-lg-3 col-md-4 col-6 mb-4">
                    <Image src={largeImageURL} alt={id}></Image>
                </div>
            );
        });
    return(<div className="row mt-3">{elements}</div>);
    }
}
