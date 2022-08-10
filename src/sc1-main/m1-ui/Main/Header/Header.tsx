import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.scss'
import {PATH} from "../routes/SelfRouter";

export const Header = () => {
  return (
    <nav className={s.navbarMain}>
      <ul className={s.navbarList}>
        <SelfNavLink urlPath={PATH.LOGIN} title={'Login'}/>
        <SelfNavLink urlPath={PATH.USERS} title={'Users'}/>
        <SelfNavLink urlPath={PATH.REGISTRATION} title={'Registration'}/>
      </ul>
    </nav>
  );
};

const SelfNavLink = ({urlPath, title}: { urlPath: string, title: string }) => {

  return (
    <li className={s.navbarListItem}>
      <NavLink to={urlPath}>
        {({isActive}) => (
          <span className={isActive ? `${s.navItem} ${s.active}` : s.navItem}>{title}</span>
        )}
      </NavLink>
    </li>
  )
}
