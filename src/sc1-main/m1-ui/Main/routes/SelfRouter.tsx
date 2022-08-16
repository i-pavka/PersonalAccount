import React from 'react';
import s from '../Main.module.css'
import {Navigate, Routes, Route} from "react-router-dom";
import {Error404} from "../Error404/Error404";
import {Login} from "../../../../sc2-features/f1-auth/Login/l1-ui/Login";
import {Contacts} from "../../../../sc2-features/f2-contacts/u1-ui/Contacts";

export const PATH = {
  LOGIN: '/login',
  CONTACTS: '/contacts',
}

export const SelfRouter = () => {

  return (
    <main className={s.mainBlock}>
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.CONTACTS}/>}/>
        <Route path={PATH.LOGIN} element={<Login/>}/>
        <Route path={PATH.CONTACTS} element={<Contacts/>}/>

        <Route path={'*'} element={<Error404/>}/>
      </Routes>
    </main>
  );
};

