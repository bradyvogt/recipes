// Ingredient actions
const formatIngredient = (ingredientObject) => {
    return ingredientObject
        .map(str => (typeof str === "string" ? str.trim() : str)) // Trim each string
        .filter(str => typeof str === "string" && str.length > 0) // Filter out empty strings
        .join(" "); // Join with spaces
}

const getIngredientName = (ingredientObject) => {
    return ingredientObject[1].toLowerCase().trim();
}