export const apiService = (dispatch, resetCities, setLoading, setCity, setImage, setError, methods, axios, CITIES_DATA) => {
  dispatch(resetCities());
  dispatch(setError(null));
  const arrayCitiesSelected = methods.getValues('cities');
  arrayCitiesSelected?.forEach((city, i) => {
    const cityFiltered = CITIES_DATA.filter(cityIntoObject => cityIntoObject.name === city);
    const lat = cityFiltered[0].lat;
    const long = cityFiltered[0].long;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=307298b190f88060b9d58d5a9e6d892b`)
      .then(res => {
        dispatch(setLoading(true));
        dispatch(setCity(res.data));
        return axios.get(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`);
      })
      .then(res => dispatch(setImage({ img: res?.config?.url, i })))
      .catch(err => dispatch(setError(err)))
      .finally(() => dispatch(setLoading(false)));
  });
};
