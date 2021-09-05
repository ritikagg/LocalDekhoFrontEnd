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
    const theme = localStorage.getItem("theme");
    if (theme !== undefined) {
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        dispatch(themeActions.SET_MODE("theme-mode-dark"));
      } else {
        dispatch(themeActions.SET_MODE("theme-mode-light"));
      }
    }
  }, [dispatch]);

  return (
    <div className={`layout ${themeReducer.mode} theme-color-red`}>
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
