const initialState = {
  menu:[],
  loading: true,
  error: false,
  cards: [],
  totalPrice: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED': 
      return {
        ...state,
        menu: action.payload,
        loading: false,
        error: false
      };
    case 'MENU_REQUESTED': 
      return {
        ...state,
        menu: state.menu,
        loading: true,
        error: false
      };
    case 'MENU_ERROR': 
      return {
        ...state,
        error: true
      };
    case 'ITEM_ADD_TO_CARD':
      const addedCardId = action.payload;
      const cardsItem = state.cards.find((item) => item.id === addedCardId)
      const menuItem = state.menu.find(item => item.id === addedCardId);

      if (cardsItem) {
        const Cards = state.cards.map(card => card.id === addedCardId ? 
          ({...card, amount: ++card.amount, commonPrice: card.price * card.amount }) : 
          card);

        return {
          ...state,
          cards: Cards,
          totalPrice: state.totalPrice + menuItem.price
        }
      } else {
        menuItem.amount = 1;
        menuItem.commonPrice = menuItem.price

        return {
          ...state,
          cards: [menuItem, ...state.cards],
          totalPrice: state.totalPrice + menuItem.price        
        }
      }
        
    case 'ITEM_DELETE_TO_CARD':
      const deletedCardId = action.payload;
      const deletedCard = state.cards.find(card => card.id === deletedCardId);

      const newCards = (deletedCard.amount === 1) ? 
        state.cards.filter((card) => card.id !== deletedCardId) :
        state.cards.map(card => card.id === deletedCardId ? ( {...card, amount: --card.amount, commonPrice: card.price * card.amount }) : card) 

      return {
        ...state,
        cards: newCards,
        totalPrice: state.totalPrice - deletedCard.price
      }

     default: 
      return state;
  }
}

export default reducer