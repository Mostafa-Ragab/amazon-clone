import React from "react";
import {
	Title,
	Container,
	Price,
	Button,
	Image,
	Rating,
} from "./menu-item.styles";
const MenuItem = ({ title, rating, imageUrl, price }) => (
	<Container>
		<Title>{title}</Title>
		<Price>${price}</Price>
		<Rating>
			{Array(rating)
				.fill()
				.map((_) => (
					<p>⭐</p>
				))}
		</Rating>
		<Image src={imageUrl} alt="item" />
		<Button>ADD TO BASKET</Button>
	</Container>
);

export default MenuItem;
