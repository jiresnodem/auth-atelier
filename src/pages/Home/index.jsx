/** @format */

import React from "react";
import * as Components from "../../components/Components";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			Page d'accueil
			<Link to="/">
				<Components.Button>Back</Components.Button>
			</Link>
		</div>
	);
};

export default Home;
