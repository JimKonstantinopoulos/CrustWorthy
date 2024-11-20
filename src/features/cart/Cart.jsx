import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  { pizzaId: 1, quantity: 2, name: "Mediterranean", totalPrice: 16 },
  { pizzaId: 2, quantity: 1, name: "Vegetable", totalPrice: 13 },
  { pizzaId: 3, quantity: 1, name: "Spinach and Mushroom", totalPrice: 15 },
];

const cart = fakeCart;

function Cart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="mt-4 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order Pizzas
        </Button>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
