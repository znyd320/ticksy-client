import PrivateGuard from "../guard/PrivateGuard";
import PublicGuard from "../guard/PublicGuard";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";
import Registration from "../pages/registration/Registration";
import Tickets from "../pages/tickets/Tickets";

import {
	UrlCategories,
	UrlCustomers,
	UrlDashboard,
	UrlKnowledge,
	UrlAgents,
	UrlAssignme,
	UrlAnalytics,
	UrlTickets,
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
								path: UrlCategories(),
								element: <>Categories</>,
							},
							{
								path: UrlCustomers(),
								element: <>Customers</>,
							},
							{
								path: UrlKnowledge(),
								element: <>Knowledge</>,
							},
							{
								path: UrlTickets(),
								element: <Tickets/>,
							},
							{
								path: UrlAnalytics(),
								element: <>Analytics</>,
							},
							{
								path: UrlAgents(),
								element: <>Agents</>,
							},
							// {
							//   path: UrlSettings(),
							//   element: <Settings />,
							// },
							{
								path: UrlAssignme(),
								element: <>Assignme</>,
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
