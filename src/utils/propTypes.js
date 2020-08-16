import PropTypes from 'prop-types';

export const galleryPropTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export const galleryItemPropTypes = {
  photo: PropTypes.shape({
    largeImageURL: PropTypes.string,
    id: PropTypes.number,
  }),
};

export const tagPropTypes = {
  name: PropTypes.string,
};

export const photoPagePropTypes = {
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

export const photoPageContainerPropTypes = {
  photoId: PropTypes.string,
};

export const mainPagePropTypes = {
  tags: PropTypes.shape({
    tag1: PropTypes.string,
    tag2: PropTypes.string,
    tag3: PropTypes.string,
    tag4: PropTypes.string,
    tag5: PropTypes.string,
    tag6: PropTypes.string,
    tag7: PropTypes.string,
    tag8: PropTypes.string,
    tag9: PropTypes.string,
    tag10: PropTypes.string,
  }),
};
