import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';

import { PhotoPageContainer, PhotoPage } from '../../components';
import {
  photoPagePropTypes,
  photoPageContainerPropTypes,
} from '../../utils/propTypes';
import { checkProps } from '../../utils/utils';
import { StyledImageContainer, StyledImage } from '../../styled/';

configure({ adapter: new Adapter() });

let mockStore = configureMockStore([]);

describe('PhotoPage Component', () => {
  const expectedProps = {
    singlePhoto: {
      id: 1,
      downloads: 255,
      favorites: 333,
      likes: 444,
      views: 5000,
      tags: 'some tag data',
      largeImageURL: 'img url',
    },
  };
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(
        PhotoPage,
        expectedProps,
        photoPagePropTypes
      );
      expect(propsError).toBeUndefined();
    });
  });

  describe('PhotoPage Component initial', () => {
    const photoPage = shallow(<PhotoPage {...expectedProps} />);

    it('Should render initial', () => {
      expect(photoPage.find('Container')).toHaveLength(1);
    });

    it('Should render StyledImageContainer', () => {
      expect(photoPage.find(StyledImageContainer)).toHaveLength(1);
    });

    it('Should render StyledImage', () => {
      expect(photoPage.find(StyledImage)).toHaveLength(1);
    });

    it('Should render singlePhoto.downloads in <td>', () => {
      expect(photoPage.find('tbody').childAt(0).childAt(0).text()).toEqual(
        String(expectedProps.singlePhoto.downloads)
      );
    });

    it('Should render singlePhoto.favorites in <td>', () => {
      expect(photoPage.find('tbody').childAt(0).childAt(1).text()).toEqual(
        String(expectedProps.singlePhoto.favorites)
      );
    });

    it('Should render singlePhoto.likes in <td>', () => {
      expect(photoPage.find('tbody').childAt(0).childAt(2).text()).toEqual(
        String(expectedProps.singlePhoto.likes)
      );
    });

    it('Should render singlePhoto.views in <td>', () => {
      expect(photoPage.find('tbody').childAt(0).childAt(3).text()).toEqual(
        String(expectedProps.singlePhoto.views)
      );
    });

    it('Should render singlePhoto.tags in <td>', () => {
      expect(photoPage.find('tbody').childAt(0).childAt(4).text()).toEqual(
        expectedProps.singlePhoto.tags
      );
    });

    it('Should render properly', () => {
      expect(photoPage).toMatchSnapshot();
    });
  });
});

describe('PhotoPageContainer Component', () => {
  const initialState = {
    photoReducer: {
      searchedPhoto: null,
      photos: [],
      loading: false,
      error: null,
    },
  };
  const expectedProps = {
    photoId: '1',
  };

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const store = mockStore(initialState);
      const wrapper = mount(
        <Provider store={store}>
          <PhotoPageContainer {...expectedProps} />
        </Provider>
      );
      const propsError = checkProps(
        wrapper,
        expectedProps,
        photoPageContainerPropTypes
      );
      expect(propsError).toBeUndefined();
    });
  });

  describe('PhotoPageContainer Loading', () => {
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
        <PhotoPageContainer {...expectedProps} />
      </Provider>
    );

    it('Should render Spinner', () => {
      expect(wrapper.find('Spinner')).toHaveLength(1);
    });

    it('Should NOT render <ErrorIndicator />', () => {
      expect(wrapper.find('ErrorIndicator')).toHaveLength(0);
    });

    it('Should NOT render <PhotoPage/>', () => {
      expect(wrapper.find('PhotoPage')).toHaveLength(0);
    });

    it('Should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('PhotoPageContainer with errorMsg', () => {
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
        <PhotoPageContainer {...expectedProps} />
      </Provider>
    );

    it('Should renders ErrorIndicator', () => {
      expect(wrapper.find('ErrorIndicator')).toHaveLength(1);
    });

    it('Should NOT render Spinner', () => {
      expect(wrapper.find('Spinner')).toHaveLength(0);
    });

    it('Should NOT render <PhotoPage/>', () => {
      expect(wrapper.find('PhotoPage')).toHaveLength(0);
    });

    it('Should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('PhotoPageContainer render PhotoPage', () => {
    const nextState = {
      ...initialState,
      photoReducer: {
        ...initialState.photoReducer,
        searchedPhoto: {
          id: 1,
          downloads: 255,
          favorites: 333,
          likes: 444,
          views: 5000,
          tags: 'some tag data',
          largeImageURL: 'img url',
        },
      },
    };
    const store = mockStore(nextState);
    const wrapper = mount(
      <Provider store={store}>
        <PhotoPageContainer />
      </Provider>
    );

    it('Should NOT render ErrorIndicator', () => {
      expect(wrapper.find('ErrorIndicator')).toHaveLength(0);
    });

    it('Should NOT render Spinner', () => {
      expect(wrapper.find('Spinner')).toHaveLength(0);
    });

    it('Should render <PhotoPage/>', () => {
      expect(wrapper.find('PhotoPage')).toHaveLength(1);
    });

    it('Should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
