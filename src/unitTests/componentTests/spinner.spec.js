import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Spinner } from '../../components/';
import { checkProps } from '../../utils/utils';

configure({ adapter: new Adapter() });

describe('Spinner Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(Spinner, {}, {});
      expect(propsError).toBeUndefined();
    });
  });

  describe('Spinner Component initial', () => {
    const spinner = shallow(<Spinner />);

    it('Should render without errors', () => {
      expect(spinner.find('div').text()).toEqual('loading...');
    });

    it('Should render properly', () => {
      expect(spinner).toMatchSnapshot();
    });
  });
});
