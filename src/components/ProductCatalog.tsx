import Product from "./Product";
import "../App.css";

type ProductCatalogProps = {
	products: { name: string; image: string }[];
	onSelect: (product: { name: string; image: string }) => void;
};

const ProductCatalog = ({ products, onSelect }: ProductCatalogProps) => {
	return (
		<div className="productCatalog">
			{products.map((product) => (
				<Product key={product.name} product={product} onSelect={onSelect} />
			))}
		</div>
	);
};

export default ProductCatalog;
