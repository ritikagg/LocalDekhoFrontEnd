import React from "react";
import Allservices from "./allservices/Allservices";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/searchbar/SearchBar";

function LandingPage() {
	return (
		<>
			<Navbar />
			<Hero />
			<SearchBar />
			<Allservices />
		</>
	);
}

export default LandingPage;
