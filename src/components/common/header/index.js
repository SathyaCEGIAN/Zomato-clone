/** @format */

import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<div className="max-width header">
			<Link to="/">
			<img
				src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
				alt="Zomato-logo"
				className="header-logo"
			/>
			</Link>
			<div className="header-right">
				<div className="header-location-search-container">
					<div className="location-wrapper">
						<div className="location-icon-name">
							<i className="fi fi-rr-marker absolute-center location-icon"></i>
							<div>Chennai</div>
						</div>
						<i className="fi fi-rr-caret-down absolute-center"></i>
					</div>
					<div className="location-search-separator"></div>
					<div className="header-searchBar">
						<i class="fi fi-rr-search absolute-center search-icon"></i>
                        <input 
                            placeholder="Search for restaurant, cuisine or a dish"
                            className="search-input"
                        />
					</div>
				</div>
                <div className="profile-wrapper">
                    <img 
                        src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100" alt="Profile"
                        className="header-profile-image"
                    />
                    <span className="header-username">Sathya</span>
                    <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
                </div>
				<Link to="/cart">
				<i className="fi fi-rr-shopping-cart cart-icon"></i>

				</Link>
			</div>
		</div>
	);
};

export default Header;
