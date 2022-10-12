import { useContext } from "react";
import SHOP_DATA from "../../shop-data.json";
import "./shop.styles.scss";

import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
	const { products } = useContext(ProductContext);
	return (
		<div className="product-container">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default Shop;
