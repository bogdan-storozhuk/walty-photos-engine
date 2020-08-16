import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import { MainPage } from '../../components';
import { checkProps } from '../../utils/utils';
import { mainPagePropTypes } from '../../components/';

configure({ adapter: new Adapter() });

let mockStore = configureMockStore([]);

describe('MainPage Component', () => {
  const initialState = {
    tagReducer: {
      tags: [],
      lastSearchedTags: [],
    },
    photoReducer: {
      searchedPhoto: null,
      photos: [],
      loading: false,
      error: null,
    },
  };

  const props = {
    tags: {
      tag1: 'Cat',
    },
  };

  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning', () => {
      const store = mockStore(initialState);
      const wrapper = mount(
        <Provider store={store}>
          <Router>
            <MainPage {...props} />
          </Router>
        </Provider>
      );
      const propsError = checkProps(wrapper, props, mainPagePropTypes);
      expect(propsError).toBeUndefined();
    });
  });

  describe('MainPage initial', () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <MainPage {...props} />
        </Router>
      </Provider>
    );

    it('Should render Container properly', () => {
      expect(wrapper.find('Container')).toHaveLength(1);
    });

    it('Should render SearchPanel properly', () => {
      expect(wrapper.find('SearchPanel')).toHaveLength(1);
    });

    it('Should render LastSearchesPanel properly', () => {
      expect(wrapper.find('LastSearchesPanel')).toHaveLength(1);
    });

    it('Should render GalleryContainer properly', () => {
      expect(wrapper.find('GalleryContainer')).toHaveLength(1);
    });

    it('Should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
