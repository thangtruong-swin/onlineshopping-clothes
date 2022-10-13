import styled from "styled-components";

export const CartIconContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	svg {
		width: 26px;
		height: 26px;
	}
`;

export const ItemCount = styled.span`
	position: absolute;
	font-size: 14px;
	font-weight: bold;
	bottom: 9px;
	color: red;
`;
