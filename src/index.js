/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Auth />} />
				<Route path="home" element={<App />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
