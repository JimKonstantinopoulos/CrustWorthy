import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart{cart.length > 0 ? `, ${username}` : " is empty"}
      </h2>

      <ul
        className={`mt-4 ${cart.length > 0 && "divide-y divide-stone-200 border-b"}`}
      >
        {cart.map((pizza) => (
          <CartItem key={pizza.pizzaId} pizza={pizza} />
        ))}
      </ul>
      {cart.length > 0 && (
        <div className="mt-6 space-x-2">
          <Button to="/order/new" type="primary">
            Order Pizzas
          </Button>
          <Button type="secondary" onClick={handleClearCart}>
            Clear cart
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
