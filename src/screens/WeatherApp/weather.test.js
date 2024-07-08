import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import thunk from 'redux-thunk';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Weather from './index';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockCitiesData = [
  {
    img: 'http://openweathermap.org/img/wn/01n@2x.png',
    coord: { lon: 139.6917, lat: 35.6895 },
    weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
    base: 'stations',
    main: { temp: 308.95, feels_like: 315.78, temp_min: 307.62, temp_max: 309.7, pressure: 1003, humidity: 50 },
    visibility: 10000,
    wind: { speed: 1.34, deg: 90, gust: 3.58 },
    rain: { '1h': 0.99 },
    clouds: { all: 75 },
    dt: 1720407194,
    sys: { type: 2, id: 268395, country: 'JP', sunrise: 1720380739, sunset: 1720432792 },
    timezone: 32400,
    id: 1850144,
    name: 'Tokyo',
    cod: 200
  }
];

describe('Weather component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore({
      login: { userName: 'testUser' },
      weather: {
        cities: mockCitiesData,
        loading: false,
        error: null
      }
    });
  });
  test('Card is rederes when exixts into redux', () => {
    act(() => {
      wrapper = mount(
          <Provider store={store}>
            <Weather />
          </Provider>
      );
    });
    wrapper.update();

    act(() => {
      const Target = wrapper.find('Target');
      expect(Target.exists()).toBe(true);
    });
  });
});
