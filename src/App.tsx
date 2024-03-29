import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  useNavigate,
  Routes,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";

import Root from "./components/ui/layout/Root";
import ErrorBoundary from "./components/error";

// pages
import Home from "./page/Home";
import About from "./page/About";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Notfound from "./page/Not-found";
import Products from "./page/Products";
import Product from "./page/Product";
import Cart from "./page/Cart";
import PrivateRoute from "./components/ui/layout/PrivateRoute";
const queryClient = new QueryClient();

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Root />}>
            <Route
              path="/"
              errorElement={<ErrorBoundary />}
              element={<Home />}
            />
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path=":id" element={<Product />} />
            </Route>
            <Route
              path="/about"
              errorElement={<ErrorBoundary />}
              element={<About />}
            />
            <Route element={<PrivateRoute />}>
              <Route path="/cart" element={<Cart />} />
            </Route>

            <Route
              path="*"
              errorElement={<ErrorBoundary />}
              element={<Notfound />}
            />
          </Route>
        </Routes>
      </QueryClientProvider>
    </NextUIProvider>
  );
}

export default App;
