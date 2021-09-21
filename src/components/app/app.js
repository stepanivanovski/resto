import React from "react";
import { Route } from 'react-router-dom'  
import { MainPage, CartPage } from "../pages";
import AppHeader from "../app-header";
import Background from "./food-bg.jpg";

const App = () => {
  
  return (
    <div
      style={{ background: `url(${Background}) center center/cover no-repeat`, minHeight: `100vh` }}
      className="app">
      <AppHeader total={50} />
      <Route path='/menu' component={MainPage}/> 
      <Route path="/order" component={CartPage}/>
    </div>
  );
};

export default App;
