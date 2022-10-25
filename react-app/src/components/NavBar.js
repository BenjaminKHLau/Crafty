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
	const user = session.user ? session.user : null;
	console.log("USER IN NAVBAR: ", user);

	return (
		<nav>
			<Link to="/">
				<img src={CraftyLogo} className="CraftyLogo" alt="Crafty's cool logo" />
			</Link>
    {!user && (<div className="login-signup-container">
      <div className="login-signup">
        <LoginFormModal />
      </div>

      <div className="login-signup">
        <SignupFormModal />
      </div>
    </div>)}

			{user && (
        <div className="logged-in-buttons">

      <div className="login-signup">
				<ShopFormModal />
			</div>
			<div className="login-signup">
				<LogoutButton />
			</div>
        </div>
      )}
		</nav>
	);
};

export default NavBar;
