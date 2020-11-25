import React from "react";
import "./home.css";
import sections from "./sections.data";
import MenuItem from "../components/menu-item/menu-item";
import Header from "../components/header/header";

const HomePage = ({ currentUser }) => (
	<>
		<Header currentUser={currentUser} />
		<div className="home">
			<img
				className="home__image"
				src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
				alt=""
			/>
			<div className="product">
				{sections.map(({ id, ...restProps }) => (
					<MenuItem key={id} {...restProps} />
				))}
			</div>
		</div>
	</>
);

export default HomePage;
