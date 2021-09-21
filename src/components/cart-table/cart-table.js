import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'
import './cart-table.scss';

const CartTable = ({ cards, deleteToCard }) => {
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {
          cards.map(card => {
            const {title, commonPrice, url, id, amount} = card
            return (
              <div key={id} className="cart__item">
                <img
                    src={url}
                    className="cart__item-img"
                    alt={title}/>
                <div className="cart__item-amount">{amount}</div>
                <div className="cart__item-title">{title}</div>
                <div className="cart__item-price">{commonPrice}$</div>
                <div onClick={() => deleteToCard(id)}className="cart__close">&times;</div>  
              </div>
            )
          })
        }
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = actions;
 
export default connect(mapStateToProps, mapDispatchToProps)(CartTable);