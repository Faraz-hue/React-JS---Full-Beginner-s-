export default function ClaudeRecipe({ recipe }) {

    return (
        <section className="recipe-container">

            <h2>AI Recipe</h2>

            <pre
                style={{
                    whiteSpace: "pre-wrap",
                    fontFamily: "inherit"
                }}
            >
                {recipe}
            </pre>

        </section>
    );
}