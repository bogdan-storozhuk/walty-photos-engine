import React from 'react';
import styled from 'styled-components';

const Image=styled.img`
width: 100%;
height: 100%;
`
const Div=styled.div`
max-height:160px
`
const GalleryItem = ({photo}) => {
    const {largeImageURL,id} = photo;
    return (
        <Div className="col-lg-3 col-md-4 col-6 mb-4">
            <Image src={largeImageURL} alt={id}></Image>
        </Div>
    );
}
export default GalleryItem;