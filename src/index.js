import reportWebVitals from "./reportWebVitals";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import Page from "./layouts/page/index.jsx";
import Accueil from "./pages/Accueil";
import NotFound from "./components/404";
import About from "./pages/About";
import Rooms from "./pages/Room";

const router = createBrowserRouter([
  {
    //PAGE D'ACCUEIL
    path: "/",
    element: (
      <Page>
        <Accueil />
      </Page>
    ),
  },
  {
    //PAGE D'UN LOGEMENT
    path: "/rooms/:id",
    element: (
      <Page>
        <Rooms />
      </Page>
    ),
  },
  {
    //A PROPOS
    path: "/about",
    element: (
      <Page>
        <About />
      </Page>
    ),
  },
  {
    //ERREUR 404
    path: "*",
    element: (
      <Page>
        <NotFound />
      </Page>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

reportWebVitals();
