import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { Tag } from './';

const LastSearchesPanel = () => {
  const lastSearchedTags = useSelector(
    (state) => state.tagReducer.lastSearchedTags
  );
  return (
    <Fragment>
      <p>3 last search</p>
      <div>
        {lastSearchedTags.map((tag) => (
          <Tag key={tag.id} name={tag.name} />
        ))}
      </div>
    </Fragment>
  );
};

LastSearchesPanel.propTypes = {};

export default LastSearchesPanel;
