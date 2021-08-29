import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../../components/sidebar/Sidebar";
import useAuth from "../../../hooks/useAuth";

const userItems = [
	{
		display_name: "Dashboard",
		route: "/dashboard",
		icon: "bx bx-category-alt",
	},
	{
		display_name: "Accepted Request",
		route: "/dashboard/accepted",
		icon: "bx bx-user-pin",
	},
	{
		display_name: "Previous Services",
		route: "/dashboard/previous",
		icon: "bx bx-user-pin",
	},
];

const helperItems = [
	{
		display_name: "Dashboard",
		route: "/dashboard",
		icon: "bx bx-category-alt",
	},
	{
		display_name: "Customers",
		route: "/dashboard/customers",
		icon: "bx bx-user-pin",
	},
	{
		display_name: "All Services",
		route: "/dashboard/allservices",
		icon: "bx bx-user-pin",
	},
	{
		display_name: "Pending Requests",
		route: "/dashboard/rq/pending",
		icon: "bx bx-notification",
	},
	{
		display_name: "Scheduled Services",
		route: "/dashboard/services/scheduled",
		icon: "bx bx-time",
	},
	{
		display_name: "Completed Request",
		route: "/dashboard/completed",
		icon: "bx bx-task",
	},
	{
		display_name: "settings",
		route: "/dashboard/settings",
		icon: "bx bx-cog",
	},
];

const DashboardSidebar = (props) => {
	const { isUser } = useAuth();
	const { pathname } = useLocation();

	const active = pathname;

	console.log(active);

	return (
		<Sidebar
			{...props}
			active={active}
			items={isUser ? userItems : helperItems}
		/>
	);
};

export default DashboardSidebar;
