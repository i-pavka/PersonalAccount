import React, {useEffect} from 'react';
import s from './Contacts.module.css'
import {Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../sc1-main/m2-bll/store";
import {PATH} from "../../../sc1-main/m1-ui/Main/routes/SelfRouter";
import {asyncFetchUsersAC} from "../u2-bll/contactsReducer";

export const Contacts = () => {

  const dispatch = useAppDispatch();
  const userId = useAppSelector(state => state.auth.authData._id);
  const isLoading = useAppSelector(state => state.users.isLoadingUsersData);
  const users = useAppSelector(state => state.users.contacts);

  useEffect(() => {
    dispatch(asyncFetchUsersAC());
  }, [dispatch]);

  if (isLoading) {
    return <h1 style={{color: '#00ed64'}}>Loading...</h1>
  }
  if (!userId) {
    return <Navigate to={PATH.LOGIN}/>
  }

  return (
    <div>
      <h1>Your private contacts</h1>
      {users.map(el => {
        return <div key={el.id}>
          <p>{el.name}</p>
          <p>{el.username}</p>
          <p>{el.phone}</p>
          <p>{el.email}</p>
          <p>{el.website}</p>
          <p>{el.address.city}</p>
          <p>{el.address.street}</p>
          <p>*********************</p>
        </div>
      })}
    </div>
  );
};
