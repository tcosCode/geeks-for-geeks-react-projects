import { createHashRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@pages/ErrorPage";
import SimpleFormPage from "@pages/SimpleFormPage";
import JokeGeneratorPage from "@pages/JokeGeneratorPage";
import PasswordValidatorPage from "@pages/PasswordValidatorPage";
import IpAddressFinderPage from "@pages/IpAddressFinderPage";

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

  {
    path: "/IpAddressFinder",
    element: <IpAddressFinderPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
