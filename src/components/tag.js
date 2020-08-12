import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { tagAdded } from '../ducks/';
import { TagSpan } from '../styled/';

const Tag = (tag) => {
  const dispatch = useDispatch();

  const onAddition = (tag) => {
    dispatch(tagAdded(tag.name));
  };

  return (
    <TagSpan onClick={() => onAddition(tag)} className="border p-2 mr-2">
      {tag.name}
    </TagSpan>
  );
};

Tag.propTypes = {
  name: PropTypes.string,
};

export default Tag;
