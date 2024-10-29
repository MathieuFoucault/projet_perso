import { useState } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import ProductCatalog from "./components/ProductCatalog";
import ProductDetails from "./components/ProductDetails";
import productsData from "./assets/data/products.json";

const App = () => {
	const [filter, setFilter] = useState("");
	const [selectedProducts, setSelectedProducts] = useState<
		{ name: string; image: string }[]
	>([]);

	const filteredProducts = productsData.filter((product) => {
		if (filter === "fruits") {
			return ["Pomme", "Banane", "Orange", "Fraise", "Raisin"].includes(
				product.name,
			);
		}
		if (filter === "legumes") {
			return ["Carotte", "Tomate", "Concombre", "Brocoli", "Chou"].includes(
				product.name,
			);
		}
		if (filter === "proteines") {
			return ["Crème", "Boeuf", "Poisson", "Poulet", "Porc", "Oeufs"].includes(
				product.name,
			);
		}
		return true;
	});

	const handleSelectProduct = (product: { name: string; image: string }) => {
		setSelectedProducts((prevSelected) => {
			if (!prevSelected.some((p) => p.name === product.name)) {
				return [...prevSelected, product];
			}
			return prevSelected;
		});
	};

	return (
		<>
			<nav className="filterBar">
				<FilterBar filterApplied={setFilter} />
			</nav>
			<main className="components">
				<section className="productCatalog">
					<ProductCatalog
						products={filteredProducts}
						onSelect={handleSelectProduct}
					/>
				</section>
				<section className="productDetails">
					<ProductDetails selectedProducts={selectedProducts} />
				</section>
			</main>
		</>
	);
};

export default App;
