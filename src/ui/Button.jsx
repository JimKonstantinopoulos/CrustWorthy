import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "rounded-full bg-yellow-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary:
      base +
      " text-sm px-4 py-3 tablet_w:px-5 tablet_w:py-3.5 tablet_w:text-sm desktop:text-base",
    small:
      base +
      " px-4 py-2.5 text-xs tablet_w:px-5 tablet_w:py-3 tablet_w:text-sm desktop:text-base",
    secondary:
      "text-sm px-4 py-2.5 tablet_w:px-5 tablet_w:py-3 rounded-full bg-transparent border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed",

    round:
      base +
      " px-2.5 py-1 text-sm tablet_w:px-3.5 tablet_w:py-2 tablet_w:text-sm desktop:text-base",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
