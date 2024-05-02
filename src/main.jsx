import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import IndexPage from "./pages/IndexPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { NewProducts } from "./pages/NewProducts";

const router = createBrowserRouter([
  {
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: "/nosotros",
        element: <AboutPage />,
      },
      {
        path: "/catalogo",
        element: <ProductsPage />,
      },
      {
        path: "/catalogo/:search",
        element: <ProductsPage />,
      },
      {
        path: "/contacto",
        element: <ContactPage />,
      },
      {
        path: "/new",
        element: <NewProducts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <div>
      <Toaster />
    </div>
  </React.StrictMode>,
);
