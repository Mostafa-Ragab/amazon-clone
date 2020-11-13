import styled from "styled-components/macro";

export const Container = styled.div`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
`;

export const Title = styled.p`
	text-align: left;
	margin-top: 0;
`;

export const Price = styled.p`
	font-weight: bold;
	text-align: left;
`;

export const Image = styled.img`
	height: 200px;
`;

export const Button = styled.button``;

export const Rating = styled.div`
	text-align: left;
`;
