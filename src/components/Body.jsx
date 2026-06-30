import React from "react";
import IngredientList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromGemini } from "../ai";

export default function Body() {
    const [ingredients, setIngredients] = React.useState(["Banana"]);
    const [recipe, setRecipe] = React.useState("");

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");

        if (!newIngredient) return;

        setIngredients(prev => [...prev, newIngredient]);
    }

    async function getRecipe() {
        const generatedRecipe = await getRecipeFromGemini(ingredients);
        setRecipe(generatedRecipe);
    }

    return (
        <>
            <form
                action={addIngredient}
                className="add-ingredient-form"
            >
                <input
                    type="text"
                    name="ingredient"
                    placeholder="Enter ingredient"
                />

                <input
                    type="submit"
                    value="+ Add Ingredient"
                />
            </form>

            {ingredients.length > 0 && (
                <IngredientList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            )}

            {recipe && (
                <ClaudeRecipe recipe={recipe} />
            )}
        </>
    );
}