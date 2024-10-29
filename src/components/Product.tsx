import "../App.css";

type ProductProps = {
	product: {
		name: string;
		image: string;
	};
	onSelect: (product: { name: string; image: string }) => void;
};

const Product = ({ product, onSelect }: ProductProps) => {
	return (
		<div onClick={() => onSelect(product)}>
			<img className="productStyle" src={product.image} alt={product.name} />
		</div>
	);
};

export default Product;
