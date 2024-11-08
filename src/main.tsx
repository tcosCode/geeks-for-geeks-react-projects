import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@styles/fonts.css";
import "@styles/reset.css";
import "@styles/global.css";

import App from "@/App";
import ErrorPage from "@pages/ErrorPage";
import SimpleFormPage from "@pages/SimpleFormPage";
import JokeGeneratorPage from "@pages/JokeGeneratorPage";

const router = createBrowserRouter([
  {
    path: "/geeks-for-geeks-react-projects/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/SimpleFormPage",
    element: <SimpleFormPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/JokeGeneratorPage",
    element: <JokeGeneratorPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
