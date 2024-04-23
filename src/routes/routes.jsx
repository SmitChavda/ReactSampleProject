import { createBrowserRouter } from "react-router-dom";
import Home from "src/pages/Home/Home";
import Users from "src/pages/Users/Users";
import { Layout } from "src/shared/layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
    ],
  },
]);

export default router;
