const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      }
      const newArr = [].concat.apply([], Object.values(newItems));
      return {
        ...state,
        items: newItems,
        itemsCount: newArr.length,
        totalPrice: newArr.reduce((sum, obj) => sum + obj.price , 0)
      };
    default:
      return state;
  }
};

export default cartReducer;
