import React from 'react';

const Target = ({ name, country, img, temp, humidity, visibility }) => (
    <div style={{
      color: 'white',
      width: '200px',
      height: '350px',
      border: '1px solid white',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginRight: '10px',
      marginBottom: '10px'
    }}>
        <h2>City: {name}</h2>
        <h3>Country: {country}</h3>
        <img src={img} alt="imagen"
            style={{
              width: '75px',
              height: '75px'
            }}
        />
        <p>Temperature: {temp} </p>
        <p>Humidity: {humidity} % </p>
        <p>Visibility: {visibility} meters</p>
    </div>
);
export default Target;
