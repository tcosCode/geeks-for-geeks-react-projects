import { createHashRouter } from "react-router-dom";

import App from "@/App";
import ErrorPage from "@pages/ErrorPage";
import SimpleFormPage from "@pages/SimpleFormPage";
import JokeGeneratorPage from "@pages/JokeGeneratorPage";
import PasswordValidatorPage from "@pages/PasswordValidatorPage";
import IpAddressFinderPage from "@pages/IpAddressFinderPage";
import DiceRollingPage from "@pages/DiceRollingPage";
import RockPaperScissorPage from "@/pages/RockPaperScissorPage";
import TodoApp from "@pages/TodoAppPage";

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

  {
    path: "/DiceRolling",
    element: <DiceRollingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/RockPaperScissor",
    element: <RockPaperScissorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/TodoApp",
    element: <TodoApp />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
