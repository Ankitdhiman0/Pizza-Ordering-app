import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-4 text-sm">
        <p className="text-left">
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold text-left sm:text-right">
          {formatCurrency(totalPrice)}
        </p>
      </div>
      <p className="text-sm capitalize italic text-stone-500 text-left">
        {isLoadingIngredients ? "loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
