import React, {useEffect} from 'react';
import {Header} from "./Header/Header";
import {SelfRouter} from "./routes/SelfRouter";
import {useAppDispatch, useAppSelector} from "../../m2-bll/store";
import {asyncInitializeAppAC} from "../../m2-bll/appReducer";

export const Main = () => {

  const dispatch = useAppDispatch();
  const appIsInitialized = useAppSelector<boolean>(state => state.app.appIsInitialized);

  useEffect(() => {
    dispatch(asyncInitializeAppAC());
  }, [dispatch]);

  if (!appIsInitialized) {
    return <h1 style={{color: '#00ed64'}}>Loading...</h1>
  }

  return (
    <>
      <Header/>
      <div>
        <SelfRouter/>
      </div>
    </>
  );
};
