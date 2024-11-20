import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import { addPizza } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  function handleAddToCart() {
    const newPizza = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };

    dispatch(addPizza(newPizza));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-600">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-end justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-red-700">
              Sold out
            </p>
          )}
          {!soldOut && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
