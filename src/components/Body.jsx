import React from "react"



export default function Body() {

    const [ingredients, setIngredients] = React.useState(["Banana"])
    const ListIngrediwnt = ingredients.map(ingredient => (
        <ul>
            <li key={ingredient}>{ingredient}</li>
        </ul>

    ))

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])

    }
    return (
        <>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    className="text"
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. Gluten Free"
                    name="ingredient"
                />
                <input
                    className="button"
                    type="submit"
                    value="+ Add Ingredient"
                />
            </form>
            <div className="add-ingredient">
                <h3>Ingredient on Hand</h3>
                {ListIngrediwnt}
            </div>


        </>
    );
}