import { createContext, useState, useEffect } from "react";
import { getCatetoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
	categoryMap: {},
});

export const CategoriesProvider = ({ children }) => {
	const [categoryMap, setCategoryMap] = useState({});

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCatetoriesAndDocuments();
			// console.log("categoryMap", categoryMap);
			setCategoryMap(categoryMap);
		};

		getCategoriesMap();
	}, []);

	const value = { categoryMap };
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
