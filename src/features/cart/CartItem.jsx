import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm sm:text-base">
      <p className="mb-2 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <p className="text-sm font-bold text-right sm:text-left">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
