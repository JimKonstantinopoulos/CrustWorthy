import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 tablet:flex tablet:items-center tablet:justify-between">
      <p className="py-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between tablet:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Remove</Button>
      </div>
    </li>
  );
}

export default CartItem;
