import "../App.css";

type ProductDetailsProps = {
	selectedProducts: { name: string; image: string }[];
};

const ProductDetails = ({ selectedProducts }: ProductDetailsProps) => {
	return (
		<>
			<h2>Ingrédients Sélectionnés</h2>
			<div className="productDetails">
				{selectedProducts.length > 0 ? (
					<div>
						{selectedProducts.map((product, index) => (
							<div key={index}>
								<img
									className="productStyle"
									src={product.image}
									alt={product.name}
								/>
							</div>
						))}
					</div>
				) : (
					""
				)}
			</div>
		</>
	);
};

export default ProductDetails;
