import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Navigate,Route, Routes} from 'react-router-dom';
import './index.css';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import SingIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/healthy-renewal' element={<Home/>}></Route>
      <Route path='/hr-home' element={<Navigate replace to={"/healthy-renewal"}/>}></Route>
      <Route path='/aboutUs' element={<AboutUs/>}></Route>
      <Route path='/signIn' element={<SingIn/>}></Route>
      <Route path='/singUp' element={<SignUp/>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
