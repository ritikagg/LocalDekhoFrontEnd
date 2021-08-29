import React, { useEffect } from "react";
import "../../assets/boxicons-2.0.7/css/boxicons.min.css";
import "../../assets/css/grid.css";
import "../../assets/css/theme.css";
import "../../assets/css/index.css";
import "./dashboard.css";
import "antd/dist/antd.css";
import DashboardSidebar from "./molecules/DashboardSidebar";
import TopNav from "./molecules/DashboardNav";
import Routes from "./Routes";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../store/theme/theme-slice";

const Dashboard = () => {
	const dispatch = useDispatch();
	const themeReducer = useSelector((state) => state.theme);
	useEffect(() => {
		const themeClass = localStorage.getItem(
			"themeMode",
			"theme-mode-light"
		);
		const colorClass = localStorage.getItem(
			"colorMode",
			"theme-mode-light"
		);
		dispatch(themeActions.SET_MODE(themeClass));
		dispatch(themeActions.SET_COLOR(colorClass));
	}, [dispatch]);

	return (
		<div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
			<DashboardSidebar />
			<div className="layout__content">
				<TopNav />
				<div className="layout__content-main">
					<Routes />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
