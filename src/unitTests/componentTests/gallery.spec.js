import React from 'react';
import * as ReactReduxHooks from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { GalleryContainer, Gallery } from '../../components';

configure({ adapter: new Adapter() });

let useEffect;

const mockUseEffect = () => {
  useEffect.mockImplementationOnce((f) => f());
};

const setUpMockStore = (state) => {
  let store = configureMockStore([])(state);
  /* mocking useEffect */
  useEffect = jest.spyOn(React, 'useEffect');
  mockUseEffect(); // 2 times
  mockUseEffect(); //
  /* mocking useSelector on our mock store */
  jest
    .spyOn(ReactReduxHooks, 'useSelector')
    .mockImplementation((state) => store.getState());
  /* mocking useDispatch on our mock store  */
  jest
    .spyOn(ReactReduxHooks, 'useDispatch')
    .mockImplementation(() => store.dispatch);
  /* shallow rendering */
  return store;
};

describe('Gallery Component', () => {
  const props = {
    photos: [],
  };
  describe('Gallery Component initial', () => {
    const gallery = shallow(<Gallery {...props} />);

    it('render initial', () => {
      expect(gallery.find('GalleryItem')).toHaveLength(0);
    });
  });
});

describe('GalleryContainer Component', () => {
  const initialState = {
    photoReducer: {
      searchedPhoto: null,
      photo: [],
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
    const store = setUpMockStore(nextState);
    const wrapper = shallow(<GalleryContainer store={store} />);

    it('Renders Spinner', () => {
      expect(wrapper.find('Spinner')).toHaveLength(1);
    });

    it('not render <ErrorIndicator />', () => {
      expect(wrapper.find('ErrorIndicator')).toHaveLength(0);
    });

    it('not render <Gallery/>', () => {
      expect(wrapper.find('Gallery')).toHaveLength(0);
    });

    it('renders properly', () => {
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
    console.log(nextState);
    const store = setUpMockStore(nextState);
    const wrapper = shallow(<GalleryContainer store={store} />);

    it('Renders ErrorIndicator', () => {
      expect(wrapper.find('ErrorIndicator')).toHaveLength(1);
    });
    it('Renders Spinner', () => {
      expect(wrapper.find('Spinner')).toHaveLength(0);
    });
  });
});
