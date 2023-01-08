import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import OneCard from "../OneCard";
import PagesWrapper from "../PagesWrapper";
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
}

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={PathNames.Home} element={<PagesWrapper />}>
            <Route path={PathNames.Home} element={<Home />} />
            <Route path={PathNames.Settings} element={ <SettingsPage />} />
            <Route path={PathNames.OneCard} element={ <OneCard />} />
          
          {/* <Route path={PathNames.RegistrationConfirmation} element={<RegistrationConfirmation /> */}
        </Route>
        <Route path={PathNames.SignIn} element={<SignIn />} />
        <Route path={PathNames.SignUp} element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
