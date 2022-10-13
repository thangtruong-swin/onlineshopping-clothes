import { Link } from "react-router-dom";

import Shop from "../../routes/shop/shop.component";

import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
} from "./directory-item.styles";

const CategoryItem = ({ category }) => {
	const { title, imageUrl } = category;

	return (
		<DirectoryItemContainer to={`shop/${title}`}>
			<BackgroundImage imageUrl={imageUrl} />
			<Body>
				<h3>{title}</h3>
				<p>Shop Now</p>
			</Body>
		</DirectoryItemContainer>
	);
};

export default CategoryItem;
