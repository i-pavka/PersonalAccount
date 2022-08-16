import React from 'react';
import {Link} from "react-router-dom";
import s from './NoticeInfo.module.scss'


export const NoticeInfo = () => {

  return (
    <div className={s.noticeMain}>
      <h2>To see this page, please LogIn</h2>
      <Link to={'/login'} className={s.link} >LogIn</Link>
    </div>
  );
};
