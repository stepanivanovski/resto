import React from "react";
import MenuList from "../menu-list";
import WithRestoService from '../hoc'

const MainPage = () => {
  return <MenuList/>;
};

export default WithRestoService()(MainPage);
