import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';

import { GalleryContainer, Gallery } from '../../components';
import { galleryPropTypes } from '../../utils/propTypes';
import { checkProps } from '../../utils/utils';

configure({ adapter: new Adapter() });

let mockStore = configureMockStore([]);

describe('Gallery Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = [
        {
          largeImageURL: 'some url',
          id: 1,
        },
      ];
      const propsError = checkProps(Gallery, expectedProps, galleryPropTypes);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Gallery Component initial', () => {
    const props = {
      photos: [],
    };
    const gallery = shallow(<Gallery {...props} />);

    it('Should render initial', () => {
      expect(gallery.find('GalleryItem')).toHaveLength(0);
    });

    it('Should render properly', () => {
      expect(gallery).toMatchSnapshot();
    });
  });

  describe('Gallery Component render check', () => {
    const props = {
      photos: [
        {
          largeImageURL: 'some url1',
          id: 1,
        },
        {
          largeImageURL: 'some url2',
          id: 2,
        },
      ],
    };
    const gallery = shallow(<Gallery {...props} />);

    it('Should render 2 GalleryItem', () => {
      expect(gallery.find('GalleryItem')).toHaveLength(2);
    });

    it('Should render properly', () => {
      expect(gallery).toMatchSnapshot();
    });
  });
});

describe('GalleryContainer Component', () => {
  const initialState = {
    photoReducer: {
      searchedPhoto: null,
      photos: [],
      loading: false,
      error: null,
    },
  };

  describe('GalleryContainer Loading', () => {
    const nextState = {
      ...initialState,
      photoReducer: {
        ...initialState.photoReducer,
        loading: true,
      },
    };
    const store = mockStore(nextState);
    const wrapper = mount(
      <Provider store={store}>
        <GalleryContainer />
      </Provider>
    );

    it('Should renders Spinner', () => {
      expect(wrapper.find('Spinner')).toHaveLength(1);
    });

    it('Should NOT render <ErrorIndicator />', () => {
      expect(wrapper.find('ErrorIndicator')).toHaveLength(0);
    });

    it('Should NOT render <Gallery/>', () => {
      expect(wrapper.find('Gallery')).toHaveLength(0);
    });

    it('Should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('GalleryContainer with errorMsg', () => {
    const nextState = {
      ...initialState,
      photoReducer: {
        ...initialState.photoReducer,
        error: 'some error',
      },
    };
    const store = mockStore(nextState);
    const wrapper = mount(
      <Provider store={store}>
        <GalleryContainer />
      </Provider>
    );

    it('Should renders ErrorIndicator', () => {
      expect(wrapper.find('ErrorIndicator')).toHaveLength(1);
    });

    it('Should NOT render Spinner', () => {
      expect(wrapper.find('Spinner')).toHaveLength(0);
    });

    it('Should NOT render <Gallery/>', () => {
      expect(wrapper.find('Gallery')).toHaveLength(0);
    });

    it('Should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('GalleryContainer render Gallery', () => {
    const nextState = {
      ...initialState,
      photoReducer: {
        ...initialState.photoReducer,
        photos: [{ largeImageURL: 'some url', id: 1 }],
      },
    };
    const store = mockStore(nextState);
    const wrapper = mount(
      <Provider store={store}>
        <GalleryContainer />
      </Provider>
    );

    it('Should NOT render ErrorIndicator', () => {
      expect(wrapper.find('ErrorIndicator')).toHaveLength(0);
    });

    it('Should NOT render Spinner', () => {
      expect(wrapper.find('Spinner')).toHaveLength(0);
    });

    it('Should render <Gallery/>', () => {
      expect(wrapper.find('Gallery')).toHaveLength(1);
    });

    it('Should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
