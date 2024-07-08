import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { setUserName } from '@slices/loginSlice';
import { setCity, resetCities, setImage } from '@slices/weatherSlice';
import Select from '@shared/Select';
import Target from '@shared/Target';
import { CITIES_DATA } from './utils';
import style from './weather.module.css';

const Weather = () => {
  const userName = useSelector(state => state.login?.userName);
  const cities = useSelector(state => state.weather?.cities);
  const methods = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (userName) {
      dispatch(setUserName(userName));
    }
  }, []);
  useEffect(() => {
    dispatch(resetCities());
    const arrayCitiesSelected = methods.getValues('cities');
    arrayCitiesSelected?.forEach((city, i) => {
      const cityFiltered = CITIES_DATA.filter(cityIntoObject => cityIntoObject.name === city);
      const lat = cityFiltered[0].lat;
      const long = cityFiltered[0].long;
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=307298b190f88060b9d58d5a9e6d892b`)
        .then(res => {
          dispatch(setCity(res.data));
          return axios.get(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`);
        })
        .then(res => dispatch(setImage({ img: res?.config?.url, i })));
    });
  }, [methods.watch('cities')]);
  return (
    <div className={style['container-weather']}>
      <div>
        <FormProvider {...methods}>
          <h1>Welcome, {userName} !!!</h1>
          <Select
            name='cities'
            label="Cities"
          />
        </FormProvider>
      </div>
      <div className={style['targets-container']}>
        {cities &&
          cities.map(city => (
            <Target
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
