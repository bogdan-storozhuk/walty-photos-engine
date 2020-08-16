import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import { SearchPanel } from '../../components';
import { checkProps } from '../../utils/utils';
import { StyledLink } from '../../styled/';

configure({ adapter: new Adapter() });

let mockStore = configureMockStore([]);

describe('SearchPanel Component', () => {
  const initialState = {
    tagReducer: {
      tags: [],
      lastSearchedTags: [],
    },
  };
  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning', () => {
      const store = mockStore(initialState);
      const wrapper = mount(
        <Provider store={store}>
          <Router>
            <SearchPanel />
          </Router>
        </Provider>
      );
      const propsError = checkProps(wrapper, {}, {});
      expect(propsError).toBeUndefined();
    });
  });

  describe('SearchPanel Component initial', () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <SearchPanel />
        </Router>
      </Provider>
    );

    it('Should render ReactTags', () => {
      expect(wrapper.find('ReactTags')).toHaveLength(1);
    });

    it('Should render StyledLink', () => {
      expect(wrapper.find(StyledLink)).toHaveLength(1);
    });

    it('Should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
