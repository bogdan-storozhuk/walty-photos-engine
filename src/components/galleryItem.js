import React from 'react';
import PropTypes from 'prop-types';

import { GalleryItemContainer, GalleryItemImage } from '../styled/';

const GalleryItem = ({ photo }) => {
  const { largeImageURL, id } = photo;
  return (
    <GalleryItemContainer className="col-lg-3 col-md-4 col-6 mb-4">
      <GalleryItemImage src={largeImageURL} alt={id}></GalleryItemImage>
    </GalleryItemContainer>
  );
};

GalleryItem.propTypes = {
  photo: PropTypes.shape({
    largeImageURL: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default GalleryItem;
