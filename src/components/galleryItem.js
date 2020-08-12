import React from 'react';
import PropTypes from 'prop-types';

import { GalleryItemContainer, GalleryItemImage } from '../styled/';

const GalleryItem = ({ photo }) => (
  <GalleryItemContainer className="col-lg-3 col-md-4 col-6 mb-4">
    <GalleryItemImage
      src={photo.largeImageURL}
      alt={photo.id}
    ></GalleryItemImage>
  </GalleryItemContainer>
);

GalleryItem.propTypes = {
  photo: PropTypes.shape({
    largeImageURL: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default GalleryItem;
