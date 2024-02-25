import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components";
import { Detail, Home } from "../pages";

import { URLS } from "../constants/urls";

export const routers = createBrowserRouter([
  {
    path: URLS.CLIENT.HOME,
    element: <Layout />,
    children: [
      {
        path: URLS.CLIENT.HOME,
        element: <Home />,
      },
      {
        path: `${URLS.CLIENT.CHARACTER}/:id`,
        element: <Detail />,
      },
    ],
  },
]);
