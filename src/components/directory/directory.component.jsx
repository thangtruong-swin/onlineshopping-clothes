import CategoryItem from "../directory-item/directory-item.component";
import { Routes, Route } from "react-router-dom";

import "../directory/directory.styles.scss";

const Directory = ({ categories }) => {
	return (
		<div className="directory-container mt-2">
			{categories.map((category) => (
				<CategoryItem category={category} key={category.id} />
			))}
		</div>
	);
};

export default Directory;
