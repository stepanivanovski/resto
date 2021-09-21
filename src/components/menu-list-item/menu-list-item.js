import React from 'react';

import meat from "./category-icons/steak.png"
import pizza from "./category-icons/pizza.svg"
import salad from "./category-icons/salad.png"
import food from "./category-icons/food.png"

import './menu-list-item.scss';

const MenuListItem = ({menuItem: { title, price, url, category}, onAddToCard}) => {
  function selectCategoryIcon(category) {
      switch (category) {
      case 'meat':
        return meat;
      case 'salads':
        return salad;
      case 'pizza':
        return pizza;
      default:
        return food;
    }
  }
  
  return (
    <li className="menu__item">
      <div className="menu__header">
          <div className="menu__title">{title}</div>
          <div className="menu__header-icon">
          <img src={selectCategoryIcon(category)} alt={category}/>
          </div>
      </div>
      <img 
        className="menu__img"
        src={url} alt={title}/>
      <div className="menu__category">
        Category: <span>{category}</span>
      </div>
      <div className="menu__price">
        Price: <span>{price}$</span>
      </div>
      <button onClick={() => {onAddToCard()}} className="menu__btn">Add to cart</button>
    </li>
  );
};

export default MenuListItem;