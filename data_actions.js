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

// Comparators (Sort Functions)
var titleSortFunction = (a, b, isAsc) => {
    return isAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
};

var ratingSortFunction = (a, b, isAsc) => {
    return isAsc ? a.rating - b.rating : b.rating - a.rating;
};