import React from 'react';
import s from './App.module.scss'
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import {store} from "../m2-bll/store";
import {Main} from "./Main/Main";

export const App = () => (
  <div className={s.appWrapper}>
    <Provider store={store}>
      <HashRouter>
        <Main/>
      </HashRouter>
    </Provider>
  </div>
);

