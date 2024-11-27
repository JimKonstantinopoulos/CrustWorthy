import store from "../../store";
import { clearCart } from "../cart/cartSlice";
import { createOrder } from "../../services/apiRestaurant";
import { redirect } from "react-router-dom";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export async function action({ request }) {
  const cart = store.getState().cart.cart;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: cart,
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Please enter a valid phone number";
    return errors;
  }

  const newOrder = await createOrder(order);
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}
