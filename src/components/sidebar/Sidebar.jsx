import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/actions";
import SidebarItem from "./SidebarItem";
import "./sidebar.css";

const Sidebar = (props) => {
	const dispatch = useDispatch();

	const activeItem = props.active;

	return (
		<div className="sidebar">
			<div className="sidebar__logo">
				<img src={logo} alt="company logo" />
			</div>
			{props.items.map((item, index) => (
				<Link to={item.route} key={index}>
					<SidebarItem
						title={item.display_name}
						icon={item.icon}
						active={item.route === activeItem}
					/>
				</Link>
			))}
			<div
				style={{ cursor: "pointer" }}
				onClick={() => {
					dispatch(logout());
				}}
			>
				<SidebarItem title="Logout" icon={"bx bx-log-out"} />
			</div>
		</div>
	);
};

export default Sidebar;
