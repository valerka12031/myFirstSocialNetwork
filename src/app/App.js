import React from "react";
import "./App.scss";

import { Header } from "../components/header/Header";
import { SideBar } from "../components/navigation/SideBar";
import { ProfilePage } from "../components/pages/ProfilePage";

const App = () => {
  return (
    <div className="wrapper">
      <Header className="header" />
      <SideBar className="sideBar" />
      <ProfilePage className="profilePage" />
    </div>
  );
};

export { App };
