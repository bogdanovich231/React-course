import IMovie from "../Api/Api";
import ProductElement from "../ProductElement/ProductElement";
import "./CatalogProducts.scss";

function CatalogProducts({ searchResults }: { searchResults: IMovie[] }) {
    console.log("catalog", searchResults)

    return (
        <div className="catalog">
            {searchResults.map((movie) => (
                <ProductElement key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default CatalogProducts