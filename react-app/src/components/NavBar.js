import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import CraftyLogo from "../components/pictures/CraftyLogo.png";
import "./Navbar.css";
import ShopFormModal from "./shops/shopFormMODAL";
import LoginFormModal from "./auth/LoginMODAL";
import SignupFormModal from "./auth/SignupMODAL";
import { useSelector } from "react-redux";

const NavBar = () => {
	const session = useSelector((state) => state.session);
	const cart = useSelector(state => state.cart.cart)
	const user = session.user ? session.user : null;
	// console.log("USER IN NAVBAR: ", user);

	return (
		<nav>
			<Link to="/">
				<img src={CraftyLogo} className="CraftyLogo" alt="Crafty's cool logo" />
			</Link>
			{!user && (
				<div className="login-signup-container">
					<div className="login-signup1">
						<LoginFormModal />
					</div>

					<div className="login-signup1">
						<SignupFormModal />
					</div>
				</div>
			)}

			{user && (
				<div className="logged-in-buttons">
					<div className="login-signup-container">
						<ShopFormModal />
					</div>
					<div className="login-signup-container">
						<Link to="/profile" className="login-signup">Profile</Link>
					</div>
					<div className="login-signup-container">
						<Link to="/cart" className="login-signup">Cart</Link>
					<div className="cart-num">{cart.length}</div>
					</div>
					<div className="login-signup-container">
						<LogoutButton />
					</div>
				</div>
			)}
		</nav>
	);
};

export default NavBar;
