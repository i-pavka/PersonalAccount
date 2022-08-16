import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.scss'
import {PATH} from "../routes/SelfRouter";
import {Button} from "../../common/components/Button/Button";
import {useAppDispatch, useAppSelector} from "../../../m2-bll/store";
import {asyncLogOutAC} from "../../../../sc2-features/f1-auth/Login/l2-bll/authReducer";

export const Header = () => {

  const dispatch = useAppDispatch();
  const appIsLoading = useAppSelector(state => state.app.appIsLoading);
  const userId = useAppSelector(state => state.auth.authData._id);

  const logOutHandler = () => {
    dispatch(asyncLogOutAC());
  }

  return (
    <header className={s.headerMain}>
    <nav className={s.navbarMain}>
      <ul className={s.navbarList}>
        <SelfNavLink urlPath={PATH.LOGIN} title={'Login'}/>
        <SelfNavLink urlPath={PATH.CONTACTS} title={'Contacts'}/>
      </ul>
    </nav>
      {userId && <Button isSpinner={appIsLoading} onClick={logOutHandler}>LogOut</Button>}
    </header>
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
