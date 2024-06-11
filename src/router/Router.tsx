import PrivateGuard from "../guard/PrivateGuard";
import PublicGuard from "../guard/PublicGuard";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";
import Registration from "../pages/registration/Registration";
import Settings from "../pages/settings/Settings";
import {
  UrlCategory,
  UrlDashboard,
  UrlFinance,
  UrlNotification,
  UrlNotificationSend,
  UrlPriceCreate,
  UrlProRequest,
  UrlSettings,
  UrlUser,
} from "./url";

export const routerList = [
  {
    element: <PublicGuard />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/reg",
        element: <Registration />,
      },
    ],
  },
  {
    element: <PrivateGuard />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            element: <MainLayout />,
            children: [
              {
                path: UrlDashboard(),
                element: <Dashboard />,
              },
              {
                path: UrlCategory(),
                element: <>Category</>,
              },
              {
                path: UrlUser(),
                element: <>Users</>,
              },
              {
                path: UrlProRequest(),
                element: <>Pro users</>,
              },
              {
                path: UrlFinance(),
                element: <>Finance</>,
              },
              {
                path: UrlPriceCreate(),
                element: <>Price Create</>,
              },
              {
                path: UrlNotification(),
                element: <>Notifications</>,
              },
              {
                path: UrlSettings(),
                element: <Settings />,
              },
              {
                path: UrlNotificationSend(),
                element: <>Notification send</>,
              },
              {
                path: "/group-create",
                element: <>Notification group create</>,
              },
            ],
          },
        ],
      },
    ],
  },
];
