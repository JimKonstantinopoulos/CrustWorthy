import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="font-roboto flex items-center justify-between border-b border-stone-200 bg-yellow-500 p-4 uppercase tablet:p-6">
      <Link to="/" className="tracking-widest">
        Slice|Me|Up
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
