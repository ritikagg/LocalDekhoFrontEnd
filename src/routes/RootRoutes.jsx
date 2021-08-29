import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from 'pages/Cart/Cart'
// import ForgetPassword from 'pages/forgetpassword/ForgetPassword'
// import Home from 'pages/home/Home'
// import CardsDemo from 'pages/ProductDetail/CardsDemo'
import Login from "../screens/login";
import Dashboard from "../screens/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import LandingPage from "../screens/landing/LandingPage";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={LandingPage}></Route>
				<Route path="/login" component={Login}></Route>
				<ProtectedRoute path="/dashboard" component={Dashboard} />
			</Switch>
		</Router>
	);
};

export default Routes;
