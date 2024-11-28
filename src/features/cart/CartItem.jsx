import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import { removePizza } from "./cartSlice";
import UpdateQuantity from "./UpdateQuantity";

function CartItem({ pizza }) {
  const { pizzaId, name, quantity, totalPrice } = pizza;
  const dispatch = useDispatch();

  function handleRemovePizza() {
    dispatch(removePizza(pizzaId));
  }

  return (
    <li className="py-3 tablet:flex tablet:items-center tablet:justify-between">
      <p className="py-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between tablet:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <div className="items center flex justify-between gap-6">
          <UpdateQuantity pizzaId={pizzaId} />
          <Button type="small" onClick={handleRemovePizza}>
            Remove
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
