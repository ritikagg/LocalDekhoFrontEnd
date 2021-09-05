import React from "react";
import HelperHome from "./HelperHome";
import UserHome from "./UserHome";
// import { Authenticator } from "../../../util/authUtil";
import useAuth from "../../../hooks/useAuth";

const Home = () => {
  const { isUser } = useAuth();
  return isUser ? <UserHome /> : <HelperHome />;
};

export default Home;
