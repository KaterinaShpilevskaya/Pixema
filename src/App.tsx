import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Theme } from "./Constants/@types";
import ThemeProvider from "./Context/Theme/ThemeProvider";
import Router from "./Pages/Router";
import { setTheme } from "./Redux/Reducers/themeReducer";
import themeSelectors from "./Redux/Selectors/themeSelectors";
import { RootState, store } from "./Redux/utils/store";

const App = () => {
 
  const dispatch = useDispatch();
  const theme = useSelector(themeSelectors.getTheme);

  const onChangeTheme = (value: Theme) => {
    dispatch(setTheme(value));
  };

  return (
    <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
  );
};

const AppWithProvider =() => {
  return (
    <Provider store={store}>
    <App />
    </Provider>
  )
}

export default AppWithProvider;
