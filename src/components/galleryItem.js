import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { GalleryItemContainer, GalleryItemImage } from '../styled/';

const GalleryItem = ({ photo }) => {
  const history = useHistory();

  const loadNewRoute = () => {
    history.push(`/photo-page/${photo.id}`);
  };

  return (
    <GalleryItemContainer className="col-lg-3 col-md-4 col-6 mb-4">
      <GalleryItemImage
        onClick={loadNewRoute}
        src={photo.largeImageURL}
        alt={photo.id}
      />
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
