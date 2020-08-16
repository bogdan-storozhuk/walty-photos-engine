import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import { App } from '../../components';
import { checkProps } from '../../utils/utils';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const app = shallow(<App />);
      const propsError = checkProps(app, {}, {});
      expect(propsError).toBeUndefined();
    });
  });

  describe('App initial', () => {
    const app = shallow(<App />);

    it('Should render Switch properly', () => {
      expect(app.find('Switch')).toHaveLength(1);
    });

    it('Should render 3 Routes properly', () => {
      expect(app.find('Route')).toHaveLength(3);
    });

    it('Should render properly', () => {
      expect(app).toMatchSnapshot();
    });
  });
});
