import React from "react"



export default function Body() {

    const [ingredients, setIngredients] = React.useState(["Banana"])
    const ListIngrediwnt = ingredients.map(ingredient => (
        <ul>
            <li key={ingredient}>{ingredient}</li>
        </ul>

    ))

    function AddIngredeient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient =>
            [...prevIngredient, newIngredient])

    }

    function signup(formData) {
        const data = Object.fromEntries(formData)
        const dietry = formData.getAll("dietry")
        const allData = {
            ...data, dietry
        }
        console.log(allData)
    }
    // Conditional Rendering
    const [unreadMessages, SetUnreadMessages] = React.useState([])

    function determineText() {
        if (unreadMessages.length === 0) {
            return "You're all caught up"
        }
        else if (unreadMessages.length === 1) {
            return "You have 1 unread message"
        }
        else {
            return `You have ${unreadMessages.length} unread messages`
        }
    }

    // End conditional Rendering

    const [recipeShown, setRecipeShown] = React.useState(false)
    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }
    return (
        <>
            <div>
                {
                    <h1>{determineText()}</h1>
                }
            </div>
            <form action={AddIngredeient} className="add-ingredient-form">
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
            {ingredients.length > 0 && <section>
                <h2>Ingre dient on Hand</h2>
                <ul className="ingredients-list">{ListIngrediwnt}</ul>
                {ingredients.length > 3 && < div className="get-recipe-container">
                    <div>
                        <h3>Ready for a Recipe</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipeShown}>Get a recipe</button>
                </div>}
            </section >}
            {recipeShown && <section className="form">
                <h1 className="signup">SignUp Form</h1>
                <form action={signup}>
                    <label htmlFor="email">Enter Email
                    </label>
                    <input id="email" defaultValue="joe@moe.com" name="email" type="email" />

                    <label htmlFor="password">Enter password
                    </label>
                    <input defaultValue="password123" id="password" name="password" type="password" />
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" defaultValue="This is the description"></textarea>
                    <fieldset>
                        <legend>Employment Status:</legend>
                        <label>
                            <input type="radio" name="empstatus"
                                value="unemployed" /> Unemployed
                        </label>


                        <label>
                            <input type="radio" name="empstatus"
                                value="employed" /> Employed
                        </label>


                        <label>
                            <input defaultChecked={true} type="radio" name="empstatus"
                                value="part-time" /> Part-Time
                        </label>
                    </fieldset>

                    <fieldset>
                        <legend>Employment Status:</legend>
                        <label>
                            <input type="checkbox" name="dietry"
                                value="Gluten Free" /> Gluten Free
                        </label>


                        <label>
                            <input type="checkbox" name="dietry"
                                value="Vegan" /> Vegan
                        </label>


                        <label>
                            <input defaultChecked={true} type="checkbox" name="dietry"
                                value="Bakery" /> Bakery
                        </label>
                    </fieldset>

                    <label htmlFor="favColor">What is your favorite color?</label>
                    <select id="favColor" name="favColor" defaultValue="" required>
                        <option value="">----Choose Color----</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="Green">Green</option>
                    </select>
                    <button>Submit</button>
                </form>
            </section>}
        </>
    );
}