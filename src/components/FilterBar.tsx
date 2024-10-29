import "../App.css";

type FilterBarProps = {
	filterApplied: (filter: string) => void;
};

const FilterBar = ({ filterApplied }: FilterBarProps) => {
	const handleFilter = (filter: string) => {
		filterApplied(filter);
	};

	return (
		<section className="filterBar">
			<h2>Filtrez vos produits</h2>
			<div className="filterButtons">
				<button
					className="buttons"
					type="button"
					onClick={() => handleFilter("fruits")}
				>
					Fruits
				</button>
				<button
					className="buttons"
					type="button"
					onClick={() => handleFilter("legumes")}
				>
					Légumes
				</button>
				<button
					className="buttons"
					type="button"
					onClick={() => handleFilter("proteines")}
				>
					Protéines
				</button>
				<button
					className="buttons"
					type="button"
					onClick={() => handleFilter("")}
				>
					Aucun filtre
				</button>
			</div>
		</section>
	);
};
export default FilterBar;
