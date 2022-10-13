import { useContext, Fragment } from "react";
// import SHOP_DATA from "../../shop-data";
import "./shop.styles.scss";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
	const { categoryMap } = useContext(CategoriesContext);
	return (
		<Fragment>
			{Object.keys(categoryMap).map((title) => (
				<Fragment key={title}>
					<h2>{title}</h2>
					<div className="product-container">
						{categoryMap[title].map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				</Fragment>
			))}
		</Fragment>
	);
};

export default Shop;
