import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

import { singlePhotoStart } from '../ducks/';
import { Spinner, ErrorIndicator } from '../components/';
import { StyledImageContainer, StyledImage } from '../styled/';

export const PhotoPage = ({ singlePhoto }) => (
  <Container className="mt-4">
    <StyledImageContainer>
      <StyledImage
        className="img-fluid mx-auto d-block"
        src={singlePhoto.largeImageURL}
        alt={singlePhoto.id}
      />
    </StyledImageContainer>
    <div className="table-responsive mt-2">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Downloads</th>
            <th>Favorites</th>
            <th>Likes</th>
            <th>Views</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{singlePhoto.downloads}</td>
            <td>{singlePhoto.favorites}</td>
            <td>{singlePhoto.likes}</td>
            <td>{singlePhoto.views}</td>
            <td>{singlePhoto.tags}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Container>
);

PhotoPage.propTypes = {
  singlePhoto: PropTypes.shape({
    id: PropTypes.number,
    downloads: PropTypes.number,
    favorites: PropTypes.number,
    likes: PropTypes.number,
    views: PropTypes.number,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string,
  }),
};

const PhotoPageContainer = ({ photoId }) => {
  const dispatch = useDispatch();
  const singlePhoto = useSelector((state) => state.photoReducer.searchedPhoto);
  const loading = useSelector((state) => state.photoReducer.loading);
  const error = useSelector((state) => state.photoReducer.error);

  useEffect(() => {
    if (photoId) {
      dispatch(singlePhotoStart(photoId));
    }
  }, [dispatch, photoId]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  if (!singlePhoto) {
    return null;
  }

  return <PhotoPage singlePhoto={singlePhoto} />;
};

PhotoPageContainer.propTypes = {
  photoId: PropTypes.string,
};

export default PhotoPageContainer;
