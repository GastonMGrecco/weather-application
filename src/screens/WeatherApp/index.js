import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { setUserName } from '@slices/loginSlice';
import { setCity, resetCities, setImage, setLoading, setError } from '@slices/weatherSlice';
import Select from '@shared/Select';
import Card from '@shared/Card';
import { apiService } from '@services/apiService';
import { CITIES_DATA } from './utils';
import style from './weather.module.css';
import { Alert } from '@mui/material';

const Weather = () => {
  const userName = useSelector(state => state.login?.userName);
  const cities = useSelector(state => state.weather?.cities);
  const loading = useSelector(state => state.weather?.loading);
  const error = useSelector(state => state.weather?.error);
  const methods = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (userName) {
      dispatch(setUserName(userName));
    }
  }, []);
  useEffect(() => {
    apiService(dispatch, resetCities, setLoading, setCity, setImage, setError, methods, axios, CITIES_DATA);
  }, [methods.watch('cities')]);
  return (
    <div className={style['container-weather']}>
      {loading && <Box sx={{
        display: 'flex',
        position: 'absolute',
        width: '90%',
        height: '100%',
        background: 'rgba(128, 128, 128, 0.452)'
      }}>
        <CircularProgress sx={{
          display: 'flex',
          position: 'absolute',
          left: '50%',
          top: '30%',
          zoom: '150%',
          color: 'white'
        }}/>
      </Box>}
        {error && <Alert severity="error"
        sx={{
          display: 'flex',
          position: 'absolute',
          left: '30%',
          top: '30%',
          zoom: '150%'
        }}>Oops!, something was wrong, try later. {error.message}</Alert>}

      <div className={style['form-container']}>
        <FormProvider {...methods}>
          <h1>Welcome, {userName} !!!</h1>
          <Select
            name='cities'
            label="Cities"
          />
        </FormProvider>
      </div>
      <div className={style['cards-container']}>
        {cities &&
          cities.map(city => (
            <Card
              key={city.name}
              name={city.name}
              country={city.sys.country}
              img={city.img}
              temp={city.main.temp}
              humidity={city.main.humidity}
              visibility={city.visibility}
            />

          ))
        }

      </div>
    </div>
  );
};

export default Weather;
