import React from 'react';
import {Header} from "./Header/Header";
import {SelfRouter} from "./routes/SelfRouter";

export const Main = () => {
  return (
    <>
      <Header/>
      <div>
        <SelfRouter/>
      </div>
    </>
  );
};
