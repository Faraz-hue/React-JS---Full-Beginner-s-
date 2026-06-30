const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

console.log("API Key:", GEMINI_API_KEY);

export async function getRecipeFromGemini(ingredients) {
    try {
        const prompt = `
You are a professional chef.

User ingredients:
${ingredients.join(", ")}

Rules:
- Ingredients are suggestions only
- You can add missing ingredients
- Create a complete recipe

Format:

Recipe Name

Ingredients:
- ...

Time:
Preparation:
Cooking:

Steps:
1.
2.
3.

Tips:
`;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            role: "user",
                            parts: [
                                {
                                    text: prompt
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();
        console.log("Gemini response:", data);

        if (!response.ok) {
            console.error("Gemini API Error:", data);
            return "API error occurred";
        }

        return (
            data?.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No recipe generated."
        );
    } catch (error) {
        console.error(error);
        return "Error generating recipe.";
    }
}