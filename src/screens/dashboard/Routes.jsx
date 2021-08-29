import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import AcceptedRequest from "./user-accepted/AcceptedRequest";
import AllServices from "./helper-all-services/AllServices";
import useAuth from "../../hooks/useAuth";

const Routes = () => {
	const { isUser } = useAuth();
	return (
		<Switch>
			<Route path="/dashboard" exact component={Home} />
			{isUser && (
				<Route path="/dashboard/accepted" component={AcceptedRequest} />
			)}
			{!isUser && (
				<Route
					path="/dashboard/allservices"
					exact
					component={AllServices}
				/>
			)}
            <Route render={() => <h3>Confidential Place. You are not allowed here!</h3>}/>
		</Switch>
	);
};

export default Routes;
