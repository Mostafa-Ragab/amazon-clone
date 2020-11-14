import React from "react";
import { Button } from "@material-ui/core";

import {
	Title,
	Container,
	Price,
	Image,
	Rating,
	Info,
} from "./menu-item.styles";
const MenuItem = ({ size, title, rating, imageUrl, price }) => (
	<Container className={`${size}`}>
		<Info>
			<Title>{title}</Title>
			<Price>${price}</Price>
			<Rating>
				{Array(rating)
					.fill()
					.map((_) => (
						<p>⭐</p>
					))}
			</Rating>
		</Info>
		<Image src={imageUrl} alt="item" />
		<Button>ADD TO BASKET</Button>
	</Container>
);

export default MenuItem;
