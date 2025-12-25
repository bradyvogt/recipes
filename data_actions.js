// Ingredient actions
const formatIngredient = (ingredientObject) => {
    // Format as "quantity name (notes)" if notes exist
    if (!ingredientObject) return "";
    let str = `${ingredientObject.quantity} ${ingredientObject.name}`;
    if (ingredientObject.notes && ingredientObject.notes.trim().length > 0) {
        str += ` (${ingredientObject.notes})`;
    }
    return str.trim();
}

const getIngredientName = (ingredientObject) => {
    // Always use .name, lowercased and trimmed
    return ingredientObject.name.toLowerCase().trim();
}

const getTotalCookTime = (recipe) => {
    return (recipe.prep_time || 0) + (recipe.cook_time || 0);
}

// Format actions
const formatTitle = (title) => {
    return getProperCase(title);
}

const formatTime = (minutes) => {
    minutes = Math.floor(minutes);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}:${String(remainingMinutes).padStart(2, '0')}`;
}

const formatRating = (rating) => {
    // Round to nearest 0.5 and format as X/10, or NR if no rating
    return rating && rating >= 0 ? `${Math.round(rating*2)/2}/10` : 'NR';
}

const getProperCase = (string) => {
    return string
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
        .join(" ");
}

const formatCopyIngredients = (recipe) => {
    // Format each ingredient as a line
    return recipe?.ingredients?.map(formatIngredient).join("\n") || "";
}

const formatCopyInstructions = (recipe) => {
    // Format each instruction as a line
    return recipe?.instructions?.join("\n") || "";
}

const getSimilarRecipes = (recipe) => {
    let currentRecipeIngredients = recipe.ingredients.map(ingredient => getIngredientName(ingredient));

    // Filter out recipes with no ingredients or same recipe
    let commonIngredientRecipes = getRecipes().filter(r => r.id !== recipe.id && r.ingredients && r.ingredients.length > 0);

    // console.log("Current recipe ingredients: ", currentRecipeIngredients);
    // console.log("Common ingredient recipes: ", commonIngredientRecipes);

    // Add common ingredients with parameter recipe
    commonIngredientRecipes.forEach(r => {
        r.commonIngredients = [];
        r.ingredients.forEach(ingredient => {
            const ingredientName = getIngredientName(ingredient);
            if (currentRecipeIngredients.includes(ingredientName)) {
                r.commonIngredients.push(ingredientName);
            }
        })
    });

    // Top 5 similar recipes with common ingredients
    return commonIngredientRecipes.filter(r => r.commonIngredients.length > 0).splice(0,5);

}

const getRecipes = (filterFunctions = [], sortFunctions = []) => {
    let filteredRecipes = recipes;

    // Add indexed id
    filteredRecipes.forEach((recipe, index) => {
        recipe.id = index;
    });

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
    return !searchCriteria || (recipe.ingredients && recipe.ingredients.map(ingredient => getIngredientName(ingredient)).includes(searchCriteria));
}

// Categories is always an array of strings
var categoryFilterFunction = (recipe, searchCriteria) => {
    return Array.isArray(recipe.categories) && recipe.categories.some(cat => cat.toLowerCase() === searchCriteria.toLowerCase());
}