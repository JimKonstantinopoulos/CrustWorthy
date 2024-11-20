import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action) {
      state.cart.push(action.payload);
    },

    deletePizza(state, action) {
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
    },

    clearCart(state) {
      state.cart = initialState;
    },
  },
});

export const {
  addPizza,
  deletePizza,
  increasePizzaQuantity,
  decreasePizzaQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, pizza) => sum + pizza.quantity, 0);

export const getTotalCartSum = (state) =>
  state.cart.cart.reduce((sum, pizza) => sum + pizza.totalPrice, 0);
