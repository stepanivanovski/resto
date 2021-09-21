import React, { Component } from 'react';
import { connect } from 'react-redux'
import WithRestoService from "../hoc";
import MenuListItem from "../menu-list-item";
import Spinner from '../spinner'
import Error from '../error'
import * as actions from '../../actions';
import "./menu-list.scss";

class MenuList extends Component {

  componentDidMount() {
    this.props.menuRequested();
    const { RestoService, menuLoaded, menuError } = this.props;
    RestoService.getMenuItems("http://localhost:3000/menu")
      .then((res) => menuLoaded(res))
      .catch(error => menuError())
  }

  render() {
    const { items, loading, error, addedToCard } = this.props
    return (error) ? <Error/> : (loading) ? <Spinner/> : <View menuItems={items}  addedToCard={addedToCard}/> 
  }
}

function View ({ menuItems, addedToCard }) {
  function renderItems(arr) {
    return arr.map(menuItem => {
      return <MenuListItem 
      key={menuItem.id}
      menuItem={menuItem}
      onAddToCard={() => {addedToCard(menuItem.id)}}/>
    })
  }
  return (
    <ul className="menu__list">{renderItems(menuItems)}</ul>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.menu,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = actions

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
