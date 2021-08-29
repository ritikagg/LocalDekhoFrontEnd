import React from "react";
import useAuth from "../../../hooks/useAuth";
import HelperHome from "./HelperHome";
import UserHome from "./UserHome";

const Home = () => {
	const { isUser } = useAuth();
	return isUser ? <UserHome /> : <HelperHome />;
};

export default Home;
