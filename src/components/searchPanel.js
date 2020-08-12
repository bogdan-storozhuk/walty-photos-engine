import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactTags from 'react-tag-autocomplete';

import { tagAdded, tagRemoved } from '../ducks';
import { StyledLink } from '../styled';
import getSuggestions from '../utils/suggestions';

import '../vendors/reactTags.css';

const SearchPanel = () => {
  const reactTags = React.createRef();
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tagReducer.tags);
  const path = tags.reduce((sum, current) => {
    return sum + `${current.name}/`;
  }, '/');

  const onAddition = (tag) => {
    dispatch(tagAdded(tag.name));
  };

  const onDelete = (i) => {
    dispatch(tagRemoved(i));
  };
  const onSearch = () => {
    const lastTags = tags.slice(-3);
    localStorage.clear();
    for (let tag of lastTags) {
      localStorage.setItem(tag.id, tag.name);
    }
  };

  return (
    <div className="mt-3">
      <ReactTags
        ref={reactTags}
        tags={tags}
        suggestions={getSuggestions()}
        onDelete={onDelete}
        onAddition={onAddition}
      />
      <div className="text-center mt-4">
        <StyledLink onClick={onSearch} to={path}>
          Search
        </StyledLink>
      </div>
    </div>
  );
};

SearchPanel.propTypes = {};

export default SearchPanel;
