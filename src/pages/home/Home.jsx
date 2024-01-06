import React from "react";
import "./Home.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/authSlice";
function Home() {
	const { user, isAuthenticated } = useSelector(selectUser);
	console.log(isAuthenticated);
	return (
		<main>
			<div id='home'>
				{isAuthenticated === false ? "" : <p>Welcome {user?.name}!</p>}
			</div>
		</main>
	);
}

export default Home;
