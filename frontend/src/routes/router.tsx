import Layout from "@/components/ui/layouts/Layout";
import Classes from "@/pages/Classes";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
import Students from "@/pages/Students";
import Create from "@/pages/teachers/create";
import Teachers from "@/pages/teachers/Teachers";
import { Routes } from "@/repository/enums";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: Routes.Login,
    Component: Login,
  },
  {
    path: Routes.Register,
    Component: Register,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: Routes.Dashboard,
        Component: Dashboard,
      },
      {
        path: Routes.Teachers,
        Component: Teachers,
        children: [
          {
            path: "create",
            Component: Create,
          },
        ],
      },
      {
        path: Routes.Students,
        Component: Students,
      },
      {
        path: Routes.Classes,
        Component: Classes,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
