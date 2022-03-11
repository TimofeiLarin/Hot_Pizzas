const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0
      );
      return {
        ...state,
        items: newItems,
        itemsCount: totalCount,
        totalPrice: totalPrice,
      };
    case 'REMOVE_CART_ITEM':
      const newItemsDelete = {
        ...state.items,
      };
      const currentTotalPrice = newItemsDelete[action.payload].totalPrice;
      const currentItemsCount = newItemsDelete[action.payload].items.length;
      delete newItemsDelete[action.payload];
      return {
        ...state,
        items: newItemsDelete,
        totalPrice: state.totalPrice - currentTotalPrice,
        itemsCount: state.itemsCount - currentItemsCount,
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: {},
        totalPrice: 0,
        itemsCount: 0,
      };

    case 'ADD_ITEM_CART': {
      const newObjItemsAdd = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItemsAdd = {
        ...state.items,
        [action.payload]: {
          items: newObjItemsAdd,
          totalPrice: getTotalPrice(newObjItemsAdd),
        },
      };
      const totalCountAdd = Object.keys(newItemsAdd).reduce(
        (sum, key) => newItemsAdd[key].items.length + sum,
        0
      );
      const totalPriceAdd = Object.keys(newItemsAdd).reduce(
        (sum, key) => newItemsAdd[key].totalPrice + sum,
        0
      );
      return {
        ...state,
        items: newItemsAdd,
        indexCount: totalCountAdd,
        totalPrice: totalPriceAdd,
      };
    }

    case 'DEL_ITEM_CART': {
      const oldItems = state.items[action.payload].items;
      const newObjItemsDel =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItemsDel = {
        ...state.items,
        [action.payload]: {
          items: newObjItemsDel,
          totalPrice: getTotalPrice(newObjItemsDel),
        },
      };

      const totalCountDel = Object.keys(newItemsDel).reduce(
        (sum, key) => newItemsDel[key].items.length + sum,
        0
      );
      const totalPriceDel = Object.keys(newItemsDel).reduce(
        (sum, key) => newItemsDel[key].totalPrice + sum,
        0
      );

      return {
        ...state,
        items: newItemsDel,
        itemsCount: totalCountDel,
        totalPrice: totalPriceDel,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
