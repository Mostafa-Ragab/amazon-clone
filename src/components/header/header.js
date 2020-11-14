import React from "react";
import {
	OptionContainer,
	OptionLink,
	LogoContainer,
	HeaderContainer,
	HeaderSearch,
	Input,
	Option,
} from "./styles/headet.styles";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => (
	<HeaderContainer>
		<LogoContainer to="/">
			<img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
		</LogoContainer>
		<HeaderSearch>
			<Input type="text" />
			<SearchIcon className="search-icon" />
		</HeaderSearch>
		<OptionContainer>
			<OptionLink to="/signin">
				<Option>
					<span className="header__optionLineOne">Hello</span>
					<span className="header__optionLineTwo">sign in</span>
				</Option>
			</OptionLink>
			<OptionLink>
				<Option>
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">Orders</span>
				</Option>
			</OptionLink>
			<OptionLink>
				<Option>
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</Option>
			</OptionLink>
			<OptionLink>
				<Option>
					<ShoppingBasketIcon className="basket" />
					<span className="header__optionLineTwo basket-count">222</span>
				</Option>
			</OptionLink>
		</OptionContainer>
	</HeaderContainer>
);

export default Header;
