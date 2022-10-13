import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;
	background-color: #198754;

	h3 {
		font-weight: bold;
		margin: 0 6px 0;
		font-size: 26px;
		color: #4a4a4a;
		text-transform: uppercase;
		color: white;
	}
	p {
		font-weight: lighter;
		font-size: 14px;
		text-transform: uppercase;
		color: white;
	}
`;

export const DirectoryItemContainer = styled(Link)`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
	&:first-child {
		margin-right: 7.5px;
	}
	&:last-child {
		margin-left: 7.5px;
	}
	&:hover {
		cursor: pointer;
		${BackgroundImage} {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		${Body} {
			opacity: 0.9;
		}
	}
`;
