/** @format */

import React from "react";
import "./exploreCard.css";

const ExploreCard = ({ restaurant }) => {
	const name = restaurant?.info?.name ?? "";
	const id = restaurant?.info?.resId;
	const coverImg = restaurant?.info?.image?.url;
	const deliveryTime = restaurant?.order?.deliveryTime;
	const approxPrice = restaurant?.info?.cfo?.text;
	const offers = restaurant?.bulkOffers ?? [];
	const cuisines = restaurant?.info?.cuisine?.map((item) => item.name);
	const proOff = offers.length > 1 ? offers[0].text : null;
	const discount = offers.length > 1 ? offers[1].text : offers.length === 1 ? offers[0].text : null;

	return (
		<div className="explore-card cur-po">
			<div className="explore-card-cover">
				<img src={coverImg} alt={name} className="explore-card-image" />
				{proOff && <div className="pro-off"> {proOff} </div>}
				{discount && <div className="discount absolute-center">{discount}</div>}
				<div className="delivery-time">{deliveryTime}</div>
				<div className="footer-price">
					<div className="recepie-name">{cuisines} </div>
					<div className="price"> {approxPrice}</div>
					<button className="addToCartBttn">Add To Cart</button>
				</div>
			</div>
		</div>
	);
};

export default ExploreCard;
