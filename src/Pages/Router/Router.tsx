import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home";
import PagesWrapper from "../PagesWrapper";

export enum PathNames {
  Home = "/",
  Trends = "/trends",
  Favorites = "/favorites",
  Settings = "/settings",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
}

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={PathNames.Home} element={<PagesWrapper />}>
            <Route path={PathNames.Home} element={<Home />} />
          {/* <Route path={PathNames.SignIn} element={<SignIn />} />
          <Route path={PathNames.SignUp} element={<SignUp />} />
          <Route path={PathNames.RegistrationConfirmation} element={<RegistrationConfirmation />} /> */}
        </Route>
        {/* <Route path="*" element={<Navigate to={PathNames.SignIn} />} /> */}
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
