import { Link } from "react-router-dom";
import Shop from "../../routes/shop/shop.component";

import "./directory-item.styles.scss";

const CategoryItem = ({ category }) => {
	const { title, imageUrl } = category;
	return (
		<Link className="directory-item-container" to={`shop/${title}`}>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="body bg-success  text-white">
				<h1 className="">{title}</h1>
				<p>Shop Now</p>
			</div>
		</Link>
	);
};

export default CategoryItem;
