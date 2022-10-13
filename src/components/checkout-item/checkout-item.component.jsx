import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const { ClearItemFromCart, addItemToCart, removeItemToCart } =
		useContext(CartContext);

	const clearItemHandler = () => ClearItemFromCart(cartItem);
	const addItemHandler = () => addItemToCart(cartItem);
	const removeItemHandler = () => removeItemToCart(cartItem);

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className="name"> {name} </span>
			<span className="quantity">
				<div className="btn btn-primary btn-sm" onClick={removeItemHandler}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="btn btn-primary btn-sm" onClick={addItemHandler}>
					&#10095;
				</div>
			</span>
			<span className="price"> ${price}.00</span>
			<div className="btn btn-danger btn-sm" onClick={clearItemHandler}>
				{/* &#10005; */}Remove
			</div>
		</div>
	);
};

export default CheckoutItem;
