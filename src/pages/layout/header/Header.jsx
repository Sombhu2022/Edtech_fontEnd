import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import AuthHeader from "./components/AuthHeader";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/slices/authSlice";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const Nav = () => {
	const [isNavMobile, setIsNavMobile] = useState(false);
	const { user } = useSelector(selectUser);
	let location = useLocation();

	const toggleMenu = () => {
		setIsNavMobile(!isNavMobile);
	};

	const userName = user?.name;
	useEffect(() => {
		const timer = setTimeout(() => {
			if (userName) {
				toast.success(`Loged in as ${userName}`);
			}
		}, 3000);

		return () => clearTimeout(timer);
	}, [userName]);

	return (
		<header className={`${isNavMobile ? "fix-to-top" : ""}`}>
			<nav className={`nav ${isNavMobile ? "nav-mobile" : ""}`}>
				<span className='logo'>
					<a href='/'>
						<motion.span
							initial={{ translateX: "-150%" }}
							animate={{ translateX: 0 }}
							transition={{
								duration: 0.3,
							}}
							className='logo-text'
						>
							Logic Lords.Dev
						</motion.span>
					</a>
				</span>

				<span
					onClick={toggleMenu}
					className={`hamburg ${isNavMobile ? "ham" : ""}`}
				>
					<div className='span-1 ham-lines'></div>
					<div className='span-2 ham-lines'></div>
					<div className='span-3 ham-lines'></div>
				</span>
			</nav>
			<div className={`side-block ${isNavMobile ? "toggle-side-block" : ""}`}>
				<ul className='ul'>
					<Link onClick={toggleMenu} className='nav-a' to={"/"}>
						<li
							className={
								location.pathname == "/" ? "nav-li activeLocation" : "nav-li"
							}
						>
							{" "}
							<i className='fa-solid fa-house'></i>Home
						</li>
					</Link>
					<Link onClick={toggleMenu} className='nav-a' to={"/profile"}>
						<li
							className={
								location.pathname == "/profile"
									? "nav-li activeLocation"
									: "nav-li"
							}
						>
							{" "}
							<i className='fa-solid fa-user'></i>Profile
						</li>
					</Link>
					<Link onClick={toggleMenu} className='nav-a' to={"/course"}>
						<li
							className={
								location.pathname == "/admin/dashbord"
									? "nav-li activeLocation"
									: "nav-li"
							}
						>
							<i className='fa-solid fa-film'></i>course
						</li>
					</Link>
					<Link onClick={toggleMenu} className='nav-a' to={"/admin/dashbord"}>
						<li
							className={
								location.pathname == "/admin/dashbord"
									? "nav-li activeLocation"
									: "nav-li"
							}
						>
							<i className='fa-solid fa-layer-group'></i>Dashboard
						</li>
					</Link>
					<Link onClick={toggleMenu} className='nav-a' to={"/auth/login"}>
						<li
							className={
								location.pathname == "/auth/login"
									? "nav-li activeLocation"
									: "nav-li"
							}
						>
							<AuthHeader />
						</li>
					</Link>
				</ul>
			</div>
		</header>
	);
};

export default Nav;
