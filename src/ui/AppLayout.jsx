import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-svh w-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <main className="overflow-y-auto">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
