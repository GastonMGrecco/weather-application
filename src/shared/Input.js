import * as React from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const Input = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <TextField
            {...field}
            label={label}
            variant="outlined"
            fullWidth
            margin="normal"
            InputProps={{
              style: {
                color: 'white',
                borderColor: 'white'
              },
              notchedOutline: {
                borderColor: 'white'
              }
            }}
            InputLabelProps={{
              style: {
                color: 'white'
              }
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white'
                },
                '&:hover fieldset': {
                  borderColor: 'white'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white'
                }
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'white'
              }
            }}
          />
        </>
      )}
    />
  );
};
export default Input;
