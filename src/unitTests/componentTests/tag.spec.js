import React from 'react';
import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import { Tag } from '../../components/';
import { tagPropTypes } from '../../utils/propTypes';
import { checkProps } from '../../utils/utils';
import { TagSpan } from '../../styled/';

configure({ adapter: new Adapter() });

let mockStore = configureMockStore([]);

describe('Tag Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const props = {
        name: 'Dog',
      };
      const propsError = checkProps(Tag, props, tagPropTypes);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Tag Component initial', () => {
    const props = {
      name: 'Dog',
    };
    const nextState = {
      tags: [],
      lastSearchedTags: [],
    };
    const store = mockStore(nextState);
    const wrapper = mount(
      <Provider store={store}>
        <Tag {...props} />
      </Provider>
    );

    it('Should render TagSpan', () => {
      expect(wrapper.find(TagSpan).text()).toEqual(props.name);
    });

    it('Should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
