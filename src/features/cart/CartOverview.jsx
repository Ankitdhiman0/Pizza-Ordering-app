import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartPrice) return null;
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-center sm:text-left font-semibold text-stone-300">
        <span>{totalCartQuantity} Pizzas Were Added.</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link
        to="/cart"
        className="text-stone-100 underline hover:text-yellow-400 transition-colors"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
