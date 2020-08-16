import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ErrorBoundry } from '../../components/';
import { checkProps } from '../../utils/utils';

configure({ adapter: new Adapter() });

describe('ErrorBoundry Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(ErrorBoundry, {}, {});
      expect(propsError).toBeUndefined();
    });
  });

  describe('ErrorBoundry Component has error', () => {
    const props = {
      children: <p>test</p>,
    };
    const errorBoundry = shallow(<ErrorBoundry {...props} />);
    errorBoundry.setState({
      hasError: true,
    });

    it('Should render ErrorIndicator', () => {
      expect(errorBoundry.find('ErrorIndicator')).toHaveLength(1);
    });

    it('Should NOT render children', () => {
      expect(errorBoundry.find('p')).toHaveLength(0);
    });

    it('Should render properly', () => {
      expect(errorBoundry).toMatchSnapshot();
    });
  });

  describe('ErrorBoundry Component has NO error and displays children', () => {
    const props = {
      children: <p>test</p>,
    };
    const errorBoundry = shallow(<ErrorBoundry {...props} />);
    errorBoundry.setState({
      hasError: false,
    });

    it('Should NOT render ErrorIndicator', () => {
      expect(errorBoundry.find('ErrorIndicator')).toHaveLength(0);
    });

    it('Should render children', () => {
      expect(errorBoundry.find('p')).toHaveLength(1);
    });

    it('Should render properly', () => {
      expect(errorBoundry).toMatchSnapshot();
    });
  });
});
