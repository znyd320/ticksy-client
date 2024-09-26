import PrivateGuard from "../guard/PrivateGuard";
import PublicGuard from "../guard/PublicGuard";
import MainLayout from "../layouts/MainLayout";
import Analytics from "../pages/Analytics/Analytics";
import Category from "../pages/Category/Category";
import CustomerNote from "../pages/Customers/CustomerNote";
import Customers from "../pages/Customers/Customers";
import ViewCustomer from "../pages/Customers/ViewCustomer";
import Dashboard from "../pages/dashboard/Dashboard";
import Knowledge from "../pages/Knowledge/Knowledge";
import Login from "../pages/login/Login";
import ManageAgent from "../pages/Manage Agent/ManageAgent";
import NotFound from "../pages/notFound/NotFound";
import Registration from "../pages/registration/Registration";
import Settings from "../pages/settings/Settings";
import Tickets from "../pages/Tickets/Tickets/Tickets";
import {
  UrlAnalytics,
  UrlCategory,
  UrlCustomerNote,
  UrlCustomers,
  UrlDashboard,
  UrlFinance,
  UrlKnowledge,
  UrlManageAgent,
  UrlNotification,
  UrlNotificationSend,
  UrlPriceCreate,
  UrlProRequest,
  UrlSettings,
  UrlTickets,
  UrlUser,
  UrlViewCustomer,
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
                path: UrlTickets(),
                element: <Tickets />,
              },
              {
                path: UrlCategory(),
                element: <Category />,
              },
              {
                path: UrlKnowledge(),
                element: <Knowledge />,
              },
              {
                path: UrlCustomers(),
                element: <Customers />,
              },
              {
                path: UrlManageAgent(),
                element: <ManageAgent />,
              },
              {
                path: UrlAnalytics(),
                element: <Analytics />,
              },
              {
                path: UrlViewCustomer(),
                element: <ViewCustomer />,
              },
              {
                path: UrlCustomerNote(),
                element: <CustomerNote />,
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
