import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

import {
  loadTagsFromURL,
  photoLoadStart,
  lastSearchedTagAdded,
} from '../ducks';
import { SearchPanel } from '.';
import { LastSearchesPanel } from '.';
import { Gallery } from '.';
import {
  deleteUndefinedValuesFromObject,
  transformObjectIntoArray,
} from '../utils/utils';

const MainPage = ({ tags }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (tags) {
      const lastSearchedTags = { ...localStorage };
      deleteUndefinedValuesFromObject(tags);
      const lastSearchedTagsArray = transformObjectIntoArray(lastSearchedTags);
      const tagArray = transformObjectIntoArray(tags);
      dispatch(lastSearchedTagAdded(lastSearchedTagsArray));
      dispatch(loadTagsFromURL(tagArray));
      dispatch(photoLoadStart(tagArray));
    }
  }, [dispatch, tags]);
  return (
    <Container>
      <SearchPanel />
      <LastSearchesPanel />
      <Gallery />
    </Container>
  );
};

MainPage.propTypes = {
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

export default MainPage;
