// Ingredient actions
const formatIngredient = (ingredientObject) => {
    return ingredientObject
        .map(ing => (typeof ing === "string" ? getProperCase(ing) : ing))
        .filter(ing => typeof ing === "string" && ing.length > 0) // Filter out empty ingredients
        .join(" "); // Join with spaces
}

const getIngredientName = (ingredientObject) => {
    return ingredientObject[1].toLowerCase().trim();
}

const getTotalCookTime = (ingredientObject) => {
    return ingredientObject.prep_time + ingredientObject.cook_time;
}

// Format actions
const formatTitle = (title) => {
    return getProperCase(title);
}

const formatTime = (minutes) => {

    minutes = Math.floor(minutes);

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    // Build formatted '2 hr 30 min'
    return `${hours ? `${hours} hr` : ''} ${remainingMinutes ? `${remainingMinutes} min` : ''}`.trim();
}

const formatRating = (rating) => {
    return rating && rating >= 0 ? `${Math.round(rating*2)/2}/10` : 'NR';
}

const getProperCase = (string) => {
    return string
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
        .join(" ");
}

const getRecipes = (filterFunctions = [], sortFunctions = []) => {
    let filteredRecipes = recipes;

    // Apply each filter with parameter
    filterFunctions.forEach(filter => {
        filteredRecipes = filteredRecipes.filter(recipe => filter.function(recipe, filter.parameter));
    });

    // Apply each sort in order
    sortFunctions.forEach(sort => {
        filteredRecipes = filteredRecipes.sort((a, b) => sort.isAsc ? sort.function(a, b) : sort.function(b, a));
    });

    return filteredRecipes;
}

const getAllIngredients = () => {
    const uniqueIngredients = new Set();
            
    // Add every ingredient to set (from every recipe)
    recipes.forEach(recipe => {
        if(recipe.ingredients){
            recipe.ingredients.forEach(ingredient => {
                uniqueIngredients.add(getIngredientName(ingredient));
            });
        }
    });

    return uniqueIngredients;
}
            
// Sort Functions (comparators)
var titleSortFunction = (a, b) => {
    return a.title.localeCompare(b.title);
};

var ratingSortFunction = (a, b) => {
    return (a.rating ? a.rating : 0) - (b.rating ? b.rating : 0);
};

// Filter functions
var titleFilterFunction = (recipe, searchCriteria) => {
    return recipe.title.toLowerCase().includes(searchCriteria.toLowerCase());
}

var ingredientFilterFunction = (recipe, searchCriteria) => {
    return !searchCriteria || recipe.ingredients && recipe.ingredients.map(ingredient => getIngredientName(ingredient)).includes(searchCriteria);
}