export const CITIES_LIST = [
  'Tokyo, Japan',
  'New York, United States',
  'London, United Kingdom',
  'Paris, France',
  'Beijing, China',
  'Los Angeles, United States',
  'Shanghai, China',
  'Moscow, Russia',
  'São Paulo, Brazil',
  'Seoul, South Korea',
  'Mexico City, Mexico',
  'Istanbul, Turkey',
  'Delhi, India',
  'Cairo, Egypt',
  'Bangkok, Thailand',
  'Rome, Italy',
  'Amsterdam, Netherlands',
  'Toronto, Canada',
  'Hong Kong, China',
  'Singapore',
  'Dubai, United Arab Emirates',
  'Sydney, Australia',
  'Buenos Aires, Argentina',
  'Chicago, United States',
  'Riyadh, Saudi Arabia',
  'Berlin, Germany',
  'Jakarta, Indonesia',
  'New Delhi, India',
  'Lima, Peru',
  'Houston, United States'
];
export const CITIES_DATA = [
  {
    name: 'Tokyo, Japan',
    lat: 35.6895,
    long: 139.6917
  },
  {
    name: 'New York, United States',
    lat: 40.7128,
    long: -74.006
  },
  {
    name: 'London, United Kingdom',
    lat: 51.5074,
    long: -0.1278
  },
  {
    name: 'Paris, France',
    lat: 48.8566,
    long: 2.3522
  },
  {
    name: 'Beijing, China',
    lat: 39.9042,
    long: 116.4074
  },
  {
    name: 'Los Angeles, United States',
    lat: 34.0522,
    long: -118.2437
  },
  {
    name: 'Shanghai, China',
    lat: 31.2304,
    long: 121.4737
  },
  {
    name: 'Moscow, Russia',
    lat: 55.7558,
    long: 37.6176
  },
  {
    name: 'São Paulo, Brazil',
    lat: -23.5505,
    long: -46.6333
  },
  {
    name: 'Seoul, South Korea',
    lat: 37.5665,
    long: 126.978
  },
  {
    name: 'Mexico City, Mexico',
    lat: 19.4326,
    long: -99.1332
  },
  {
    name: 'Istanbul, Turkey',
    lat: 41.0082,
    long: 28.9784
  },
  {
    name: 'Delhi, India',
    lat: 28.6139,
    long: 77.209
  },
  {
    name: 'Cairo, Egypt',
    lat: 30.0444,
    long: 31.2357
  },
  {
    name: 'Bangkok, Thailand',
    lat: 13.7563,
    long: 100.5018
  },
  {
    name: 'Rome, Italy',
    lat: 41.9028,
    long: 12.4964
  },
  {
    name: 'Amsterdam, Netherlands',
    lat: 52.3676,
    long: 4.9041
  },
  {
    name: 'Toronto, Canada',
    lat: 43.6511,
    long: -79.347
  },
  {
    name: 'Hong Kong, China',
    lat: 22.3193,
    long: 114.1694
  },
  {
    name: 'Singapore',
    lat: 1.3521,
    long: 103.8198
  },
  {
    name: 'Dubai, United Arab Emirates',
    lat: 25.2769,
    long: 55.2962
  },
  {
    name: 'Sydney, Australia',
    lat: -33.8688,
    long: 151.2093
  },
  {
    name: 'Buenos Aires, Argentina',
    lat: -34.6037,
    long: -58.3816
  },
  {
    name: 'Chicago, United States',
    lat: 41.8781,
    long: -87.6298
  },
  {
    name: 'Riyadh, Saudi Arabia',
    lat: 24.7136,
    long: 46.6753
  },
  {
    name: 'Berlin, Germany',
    lat: 52.52,
    long: 13.405
  },
  {
    name: 'Jakarta, Indonesia',
    lat: -6.2088,
    long: 106.8456
  },
  {
    name: 'New Delhi, India',
    lat: 28.6139,
    long: 77.209
  },
  {
    name: 'Lima, Peru',
    lat: -12.0464,
    long: -77.0428
  },
  {
    name: 'Houston, United States',
    lat: 29.7604,
    long: -95.3698
  }
];

export const ITEM_HEIGHT = 100;
export const ITEM_PADDING_TOP = 8;
export const MENU_PROPS = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
export const ONE_CITY = {
  img: 'http://openweathermap.org/img/wn/01n@2x.png',
  coord: {
    lon: 139.6917,
    lat: 35.6895
  },
  weather: [
    {
      id: 500,
      main: 'Rain',
      description: 'light rain',
      icon: '10d'
    }
  ],
  base: 'stations',
  main: {
    temp: 308.95,
    feels_like: 315.78,
    temp_min: 307.62,
    temp_max: 309.7,
    pressure: 1003,
    humidity: 50,
    sea_level: 1003,
    grnd_level: 1001
  },
  visibility: 10000,
  wind: {
    speed: 1.34,
    deg: 90,
    gust: 3.58
  },
  rain: {
    '1h': 0.99
  },
  clouds: {
    all: 75
  },
  dt: 1720407194,
  sys: {
    type: 2,
    id: 268395,
    country: 'JP',
    sunrise: 1720380739,
    sunset: 1720432792
  },
  timezone: 32400,
  id: 1850144,
  name: 'Tokyo',
  cod: 200
};
