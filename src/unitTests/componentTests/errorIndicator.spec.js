import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ErrorIndicator } from '../../components/';
import { checkProps } from '../../utils/utils';

configure({ adapter: new Adapter() });

describe('ErrorIndicator Component', () => {
  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning', () => {
      const propsError = checkProps(ErrorIndicator, {}, {});
      expect(propsError).toBeUndefined();
    });
  });

  describe('ErrorIndicator Component initial', () => {
    const errorIndicator = shallow(<ErrorIndicator />);

    it('Should render without errors', () => {
      expect(errorIndicator.find('div').text()).toEqual('Error!');
    });

    it('Should render properly', () => {
      expect(errorIndicator).toMatchSnapshot();
    });
  });
});
