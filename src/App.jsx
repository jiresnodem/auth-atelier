/** @format */

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
	return (
		<div>
			<Header>Header</Header>
			<Outlet />
			<Footer>Footer</Footer>
		</div>
	);
};

export default App;
