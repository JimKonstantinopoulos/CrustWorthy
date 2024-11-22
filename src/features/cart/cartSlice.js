import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action) {
      let existingPizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload.pizzaId,
      );

      if (existingPizza) {
        existingPizza.quantity = action.payload.quantity;
        existingPizza.totalPrice = action.payload.totalPrice;
      } else state.cart.push(action.payload);
    },

    removePizza(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },

    increasePizzaQuantity(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );

      pizza.quantity++;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;
    },

    decreasePizzaQuantity(state, action) {
      const pizza = state.cart.find(
        (pizza) => pizza.pizzaId === action.payload,
      );

      pizza.quantity--;
      pizza.totalPrice = pizza.quantity * pizza.unitPrice;

      if (pizza.quantity === 0)
        cartSlice.caseReducers.removePizza(state, action);
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addPizza,
  removePizza,
  increasePizzaQuantity,
  decreasePizzaQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, pizza) => sum + pizza.quantity, 0);

export const getTotalCartSum = (state) =>
  state.cart.cart.reduce((sum, pizza) => sum + pizza.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityById = (pizzaId) => (state) =>
  state.cart.cart.find((pizza) => pizza.pizzaId === pizzaId)?.quantity ?? 0;
