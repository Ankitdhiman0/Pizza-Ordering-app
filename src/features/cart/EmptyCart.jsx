// import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3 max-w-xl mx-auto text-center">
      <LinkButton to="/menu" className="inline-block">
        &larr; Back to menu
      </LinkButton>

      <p className="mt-7 text-lg font-semibold">
        Your cart is still empty. <br className="block sm:hidden" />
        Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
