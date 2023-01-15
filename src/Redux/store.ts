import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "./Reducers/themeReducer";
import filmsReducer from './Reducers/filmsReducer';
import authReducer from './Reducers/authReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()


const rootReducer = {
  themeReducer,
  filmsReducer,
  authReducer
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>