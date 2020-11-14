import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
	background-color: #131921;
	display: flex;
	width: 100%;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 100;
`;

export const LogoContainer = styled(Link)`
	img {
		width: 100px;
		object-fit: contain;
		margin-top: 18px;
		margin-left: 20px;
		margin-right: 20px;
	}
`;

export const OptionContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

export const OptionLink = styled(Link)`
	color: white;
	text-decoration: none;
`;

export const HeaderSearch = styled.div`
	display: flex;
	flex: 1;

	.search-icon {
		background-color: #cd9042;
		padding: 5px;
		height: 22px !important;
	}
`;

export const Input = styled.input`
	width: 100%;
	border: none;
	height: 12px;
	padding: 10px;
`;
export const Option = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	margin-right: 10px;

	.header__optionLineOne {
		font-size: 10px;
	}

	.header__optionLineTwo {
		font-size: 13px;
		font-weight: 800;
	}
	.basket {
		display: flex;
		align-items: center;
	}
	.basket-count {
		margin-left: 10px;
		margin-right: 10px;
	}
`;
