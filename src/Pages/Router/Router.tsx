import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import NewPassword from "../NewPassword";
import OneCard from "../OneCard";
import PagesWrapper from "../PagesWrapper";
import ResetPassword from "../ResetPassword";
import SettingsPage from "../SettingsPage";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

export enum PathNames {
  Home = "/",
  Trends = "/trends",
  Favorites = "/favorites",
  Settings = "/settings",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  OneCard = "one-card/:id",
  ResetPassword = "resetpassword",
  NewPassword = "newpassword",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper />}>
          <Route path={PathNames.Home} element={<Home />} />
          <Route path={PathNames.Settings} element={<SettingsPage />} />
          <Route path={PathNames.OneCard} element={<OneCard />} />
        </Route>
        <Route path={PathNames.SignIn} element={<SignIn />} />
        <Route path={PathNames.SignUp} element={<SignUp />} />
        <Route path={PathNames.ResetPassword} element={<ResetPassword />} />
        <Route path={PathNames.NewPassword} element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
