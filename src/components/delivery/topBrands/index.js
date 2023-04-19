/** @format */

import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/carousal/nextArrow";
import PrevArrow from "../../common/carousal/prevArrow";
import Slider from "react-slick";


const topBrandList = [
	{
		id: 1,
		time: "26 min",
		title: "SS Hyderabad Biriyani",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/868e99c35e35fc2bae1dccc465ed4c82_1625159864.png?output-format=webp",
	},
	{
		id: 2,
		time: "22 min",
		title: "KFC",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875219.png?output-format=webp",
	},
	{
		id: 3,
		time: "25 min",
		title: "Domino's Pizza",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252640.png?output-format=webp",
	},
	{
		id: 4,
		time: "21 min",
		title: "A2B - Adyar Ananda Bhavan",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505652.png?output-format=webp",
	},
	{
		id: 5,
		time: "19 min",
		title: "Sangeetha Veg Restaurant",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/f2ac1ad991aa8311242cbe675661040e_1568097187.png?output-format=webp",
	},
	{
		id: 6,
		time: "33 min",
		title: "Hotel Saravana Bahavan",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/d5fc2e2a1c3add1c898b3f5c27e67631_1635754295.png?output-format=webp",
	},
	{
		id: 7,
		time: "27 min",
		title: "McDonald's",
		cover:
			"https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643984189.png?output-format=webp",
	},
];

const settings = {
	infinite: true,
	speed: 500,
	slidesToShow: 6,
	slidesToScroll: 1,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
};

const TopBrands = () => {
	return (
    <div className="top-brands max-width">
        <div className="collection-title">Top Brands for you</div>
        <Slider {...settings}>
            {topBrandList.map((brand) => {
                return (
                    <div>
                        <div className="top-brands-cover">
                            <img 
                            src={brand.cover}
                            className="top-brands-cover"
                            alt={brand.title}
                            />
                        </div>
                        <div className="top-brand-title">{brand.title}</div>
                    </div>
                );
            })}
        </Slider>
    </div>
    );
};

export default TopBrands;
