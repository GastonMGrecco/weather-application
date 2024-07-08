import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Controller, useFormContext } from 'react-hook-form';
import { CITIES_LIST, MENU_PROPS } from '../screens/WeatherApp/utils';

const MultipleSelect = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label" sx={{ color: 'white' }}>
          {label}
        </InputLabel>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={field.value || []}
              onChange={(e) => field.onChange(e.target.value)}
              input={<OutlinedInput sx={{ color: 'white' }} />}
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white'
                },
                '& .MuiInputBase-input': {
                  color: 'white'
                }
              }}
              MenuProps={MENU_PROPS}
            >
              {CITIES_LIST.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
    </div>
  );
};

export default MultipleSelect;
