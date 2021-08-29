import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ component: Comp, ...restProps }) => {
	const { isAuth } = useAuth();
	return (
		<Route
			{...restProps}
			render={(props) => {
				return isAuth ? <Comp {...props} /> : <Redirect to="/" />;
			}}
		/>
	);
};

export default ProtectedRoute;
