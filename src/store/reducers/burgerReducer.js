import * as actionType from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false
};

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      const updatedIngredient = {
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
      };
      const updatedIngredients = updatedObject(
        state.ingredients,
        updatedIngredient
      );
      const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
      };
      return updatedObject(state, updatedState);
    // return {
    //   ...state,
    //   ingredients: {
    //     ...state.ingredients,
    //     [action.ingredientName]: state.ingredients[action.ingredientName] + 1
    //   },
    //   totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
    // };
    case actionType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
      };
    case actionType.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false
      };
    case actionType.FETCHED_INGREDIENTS_FAILED:
      return {
        ...state,
        error: false
      };

    default:
      return state;
  }
};

export default reducer;