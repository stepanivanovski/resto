import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';

const AppHeader = ({ total }) => {
  return (
    <header className="header">
      <Link to="/menu" className="header__link">
        Menu
      </Link>
      <Link to="/order" className="header__link">
        <img className="header__cart" src={cartIcon} alt="cart"></img>
        Total: {total} $
      </Link>
    </header>
  );
};

const mapStateToProps = (state) => {
 return {
   total: state.totalPrice
 }
}

export default connect(mapStateToProps)(AppHeader);