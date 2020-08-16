import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { GalleryItem } from '../../components/';
import { galleryItemPropTypes } from '../../utils/propTypes';
import { checkProps } from '../../utils/utils';
import { GalleryItemContainer, GalleryItemImage } from '../../styled/';

configure({ adapter: new Adapter() });

describe('GalleryItem Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        largeImageURL: 'some url',
        id: 1,
      };
      const propsError = checkProps(
        GalleryItem,
        expectedProps,
        galleryItemPropTypes
      );
      expect(propsError).toBeUndefined();
    });
  });

  describe('GalleryItem Component initial', () => {
    const props = {
      photo: {
        largeImageURL: 'some url',
        id: 1,
      },
    };
    const galleryItem = shallow(<GalleryItem {...props} />);

    it('Should render without errors', () => {
      expect(galleryItem.find(GalleryItemContainer)).toHaveLength(1);
    });

    it('Should render an imag', () => {
      expect(galleryItem.find(GalleryItemImage)).toHaveLength(1);
    });

    it('Should render properly', () => {
      expect(galleryItem).toMatchSnapshot();
    });
  });
});
