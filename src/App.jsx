import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu from "./features/menu/Menu";
import { loader as menuLoader } from "./features/menu/menuLoader";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import { loader as orderLoader } from "./features/order/orderLoader";
import CreateOrder from "./features/order/CreateOrder";
import { action as createOrderAction } from "./features/order/createOrderAction";
import { action as updateOrderAction } from "./features/order/updateOrderAction";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        action: updateOrderAction,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
