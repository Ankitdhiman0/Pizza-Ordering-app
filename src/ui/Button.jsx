import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-xs sm:text-sm rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary:
      base +
      " bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4",
    small:
      base +
      " bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-xs sm:text-sm",
    round:
      base +
      " bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3.5 md:py-2 text-xs sm:text-sm",
    secondary:
      base +
      " border-2 border-stone-300 text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:ring-stone-200 px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
