import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { GalleryItem } from './';
import { Spinner } from './';
import { ErrorIndicator } from './';

export const Gallery = ({ photos }) => (
  <div className="row mt-3">
    {photos.map((photo) => (
      <GalleryItem key={photo.id} photo={photo} />
    ))}
  </div>
);

const GalleryContainer = () => {
  const photos = useSelector((state) => state.photoReducer.photos);
  const loading = useSelector((state) => state.photoReducer.loading);
  const error = useSelector((state) => state.photoReducer.error);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <Gallery photos={photos} />;
};

Gallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default GalleryContainer;
