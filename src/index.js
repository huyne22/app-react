import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store, persistor} from './redux/store';
import { BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";
import {PersistGate} from 'redux-persist/integration/react';
import Admin from './component/Admin/Admin';
import User from './component/User/User';
import HomePage from './component/Home/HomePage';
// const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<HomePage/>}></Route>
          <Route path='users' element={<User/>}></Route>
        </Route>

          <Route path='admins' element={<Admin/>}></Route>
      </Routes>
    </BrowserRouter>
    {/* </React.StrictMode> */}
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
