import React from 'react';
import s from './Login.module.scss';
import {LoginForm} from "./LoginForm/LoginForm";
import {Link, Navigate} from "react-router-dom";
import {useAppSelector} from "../../../../sc1-main/m2-bll/store";
import {PATH} from "../../../../sc1-main/m1-ui/Main/routes/SelfRouter";

export const Login = () => {

  const isAuth = useAppSelector(state => state.auth.isAuth);

  if (isAuth) {
    return <Navigate to={PATH.CONTACTS}/>
  }

  return (
    <div className={s.loginMain}>
      <div className={s.loginBlock}>
        <div className={s.infoBlock}>
          <h2>Personal Account</h2>
          <p>To log in get registered
            <Link to="/registration">Registration</Link>
          </p>
          <p>Or use common test account credentials</p>
          <div className={s.loginData}>
            <p>Email: siguser@bk.ru</p>
            <p>Password: 123456qw</p>
          </div>
        </div>
        <h2>Login</h2>
        <LoginForm/>
      </div>
    </div>
  );
};
