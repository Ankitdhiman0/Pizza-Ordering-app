import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:flex-nowrap sm:px-6">
      <Link to="/" className="tracking-widest text-sm sm:text-base">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
