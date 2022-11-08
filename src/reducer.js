export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item?.prise + amount, 0);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASHKET":
      return { ...state, basket: [...state.basket, action.item] };
      // eslint-disable-next-line no-unreachable
      break;
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product {id:${action.id}}`);
      }
      return { ...state, basket: newBasket };
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return state;
  }
};
