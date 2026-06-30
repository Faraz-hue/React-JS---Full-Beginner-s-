export default function IngredientList(props) {

    const ingredientList = props.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));

    return (
        <section>

            <h2>Ingredients on Hand</h2>

            <ul className="ingredients-list">
                {ingredientList}
            </ul>

            {props.ingredients.length > 3 && (
                <div className="get-recipe-container">

                    <div>
                        <h3>Ready for a Recipe?</h3>

                        <p>
                            Generate a recipe from your ingredients.
                        </p>
                    </div>

                    <button onClick={props.getRecipe}>
                        Get a Recipe
                    </button>

                </div>
            )}

        </section>
    );
}