import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { setUserName } from '@slices/loginSlice';
import Input from '@shared/Input';
import style from './log-in.module.css';

const LogIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const methods = useForm();

  return (
    <div className={style['container-login']}>
      <div className={style['login-form']}>
        <FormProvider {...methods}>
          <h1>Login</h1>
          <Input name='user-name' label='User Name' />
          <Button
          variant='outlined'
            onClick={() => {
              dispatch(setUserName(methods.getValues('user-name')));
              localStorage.setItem('userName', methods.getValues('user-name'));
              navigate('/weather-app');
            }}>Login
          </Button>
        </FormProvider>
      </div>
    </div>
  );
};

export default LogIn;
