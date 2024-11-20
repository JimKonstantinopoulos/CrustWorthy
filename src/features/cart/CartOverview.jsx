import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalCartSum } from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartSum = useSelector(getTotalCartSum);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 tablet:p-6 tablet_w:text-base">
      <p className="space-x-4 font-semibold text-stone-300 tablet:space-x-5">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartSum)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
