import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../../redux/store';
import Login from './index';
import Weather from '@screens/WeatherApp';
import { Provider } from 'react-redux';

describe('LogIn component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={ <Login/>} />
                  <Route path='/weather-app' element={ <Weather/>} />
              </Routes>
          </BrowserRouter>
    </Provider>);
  });

  afterEach(() => {

  });
  test('renders a button', () => {
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
  test('should navigate to weather-app on login button click', () => {
    const userInput = screen.getAllByLabelText('User Name').at(0);
    fireEvent.change(userInput, { target: { value: 'testuser' } });
    const loginButton = screen.getAllByRole('button').at(0);
    fireEvent.click(loginButton);
    const Welcome = screen.getAllByRole('heading').at(0);
    expect(Welcome).toBeInTheDocument();
  });
});
