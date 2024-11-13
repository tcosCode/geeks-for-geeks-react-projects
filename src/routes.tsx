import { createHashRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@pages/ErrorPage";
import SimpleFormPage from "@pages/SimpleFormPage";
import JokeGeneratorPage from "@pages/JokeGeneratorPage";
import PasswordValidatorPage from "@pages/PasswordValidatorPage";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/SimpleForm",
    element: <SimpleFormPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/JokeGenerator",
    element: <JokeGeneratorPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/PasswordValidator",
    element: <PasswordValidatorPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
