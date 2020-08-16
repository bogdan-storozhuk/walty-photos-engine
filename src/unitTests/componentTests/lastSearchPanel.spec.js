import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

import { LastSearchesPanel } from '../../components';
import { checkProps } from '../../utils/utils';

configure({ adapter: new Adapter() });

let mockStore = configureMockStore([]);

describe('LastSearchesPanel Component', () => {
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
          <LastSearchesPanel />
        </Provider>
      );
      const propsError = checkProps(wrapper, {}, {});
      expect(propsError).toBeUndefined();
    });
  });

  describe('initial basic elements', () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <LastSearchesPanel />
      </Provider>
    );

    it('Should render <p/> with text', () => {
      expect(wrapper.find('p').text()).toEqual('3 last search');
    });

    it('Should render <div/> properly', () => {
      expect(wrapper.find('div')).toHaveLength(1);
    });
  });

  describe('without lastSearchedTags in State', () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <LastSearchesPanel />
      </Provider>
    );

    it('Should NOT render <Tag/>', () => {
      expect(wrapper.find('Tag')).toHaveLength(0);
    });

    it('Should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('with lastSearchedTags in State', () => {
    const nextState = {
      ...initialState,
      tagReducer: {
        ...initialState.tagReducer,
        lastSearchedTags: [
          {
            id: 1,
            name: 'Dog',
          },
          {
            id: 2,
            name: 'Cat',
          },
        ],
      },
    };
    const store = mockStore(nextState);
    const wrapper = mount(
      <Provider store={store}>
        <LastSearchesPanel />
      </Provider>
    );

    it('Should render 2 <Tag/>', () => {
      expect(wrapper.find('Tag')).toHaveLength(2);
    });

    it('Should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
