import styled from "styled-components/macro";

export const Container = styled.div`
	width: 45%;
	min-width: 100px;
	max-height: 400px;
	flex: 1 1 auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	margin: 10px;
	background-color: white;
	z-index: 1;

	Button {
		background-color: #f0c14b;
		border: 1px solid;
		border-color: #a88734 #9c7e31 #846a29;
		width: fit-content;
		align-self: center;
		margin-bottom: 10px;
	}
	&.medium {
		width: 30%;
	}
`;

export const Info = styled.div`
	height: 100px;
	margin-bottom: 15px;
`;

export const Title = styled.p``;

export const Price = styled.p`
	margin-top: 5px;
`;

export const Image = styled.img`
	width: 100%;
	max-height: 200px;
	object-fit: contain;
	margin-bottom: 15px;
`;
export const Rating = styled.div`
	display: flex;
`;
