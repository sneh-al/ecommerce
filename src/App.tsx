import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import Root from "./components/ui/layout/Root";
import ErrorBoundary from "./components/error";

// pages
import Home from "./page/Home";
import About from "./page/About";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const queryClient = new QueryClient();


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Root />}>
        <Route path="/" errorElement={<ErrorBoundary />} element={<Home />} />
        <Route path="/about" errorElement={<ErrorBoundary />} element={<About />} />
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
