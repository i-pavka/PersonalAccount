import React from 'react';
import s from '../Main.module.css'
import {Navigate, Routes, Route} from "react-router-dom";
import {Error404} from "../Error404/Error404";
import {Login} from "../../../../sc2-features/f1-auth/Login/l1-ui/Login";
import {Registration} from "../../../../sc2-features/f1-auth/Registration/r1-ui/Registration";
import {Users} from "../../../../sc2-features/f2-users/u1-ui/Users";


export const PATH = {
  LOGIN: '/login',
  USERS: '/users',
  REGISTRATION: "/registration",
}

export const SelfRouter = () => {

  return (
    <main className={s.mainBlock}>
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.USERS}/>}/>
        <Route path={PATH.LOGIN} element={<Login/>}/>
        <Route path={PATH.USERS} element={<Users/>}/>
        <Route path={PATH.REGISTRATION} element={<Registration/>}/>

        <Route path={'*'} element={<Error404/>}/>
      </Routes>
    </main>
  );
};

