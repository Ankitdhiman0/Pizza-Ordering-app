import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex flex-col sm:flex-row gap-4 py-4 border-b border-stone-200">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 w-24 self-center sm:self-start object-cover rounded ${
          soldOut ? "opacity-70 grayscale" : ""
        }`}
      />
      <div className="flex grow flex-col pt-0.5 text-center sm:text-left">
        <p className="font-medium text-base sm:text-lg">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-3 sm:mt-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          {!soldOut ? (
            <p className="text-sm font-semibold">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex flex-col xs:flex-row gap-2 sm:gap-4 items-center justify-center sm:justify-start">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
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
