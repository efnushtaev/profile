import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Profile from './View/Components/Profile/Profile';



function App() {
  return (
    <BrowserRouter>
    <Profile/>

    </BrowserRouter>
  );
}

export default App;
