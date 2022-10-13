import styled from "styled-components";

import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 280px;
	height: 450px;
	display: flex;
	flex-direction: column;
	padding: 10px;
	border: 1px solid black;
	background-color: white;
	top: 80px;
	right: 50px;
	z-index: 5;
	${BaseButton},
	${GoogleSignInButton},
  ${InvertedButton} {
		margin-top: auto;
	}
`;

export const EmptyMessage = styled.span`
	font-size: 14px;
	margin: 60px 50px;
`;

export const CartItems = styled.div`
	height: 450px;
	display: flex;
	flex-direction: column;
	overflow: auto;
`;
