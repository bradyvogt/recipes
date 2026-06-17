/* TEMPLATE
{
    "title": "", (REQUIRED)
    "prep_time": #, //minutes
    "cook_time": #, //minutes
    "rating": #, //out of 10
    "temperature": #, //degrees F
    "servings": #,
    "category": "",
    "ingredients": [
        ["Amount", "Ingredient", "Notes"]
    ],
    "instructions": [
        ""
    ],
    "note": ""
}
*/

const recipes = [
    {
        "title": "Beef Enchiladas",
        "prep_time": 30,
        "cook_time": 30,
        "rating": 7,
        "servings": 6,
        "temperature": 350,
        "category": "mexican",
        "ingredients": [
            ["1 lb", "ground beef"],
            ["8", "tortillas"],
            ["1 can", "enchilada sauce"],
            ["10 oz", "tomato soup"],
            ["10 oz", "cream of chicken"],
            ["1 pkg", "taco seasoning"],
            ["16 oz", "shredded cheddar"]
        ],
        "instructions": [
            "Preheat oven to 350 degrees",
            "Brown ground beef, drain grease, add water and taco seasoning",
            "In medium-sized bowl mix the enchilada sauce, tomato soup, cream of chicken",
            "Let ground beef simmer until water has absorbed",
            "Add taco meat and cheese to each tortilla",
            "Add rolled tortillas to greased 9x13 pan",
            "Pour sauce mixture over the tortillas and sprinkle with cheese",
            "Bake at 350 degrees for 30 min"
        ]
    },
    {
        "title": "Jamaican Jerk Chicken",
        "prep_time": 40,
        "cook_time": 20,
        "servings": 6,
        "category": "main dish",
        "ingredients": [
            ["1 lb", "chicken tenders"],
            ["3 tbsp", "soy sauce"],
            ["2", "green onions"],
            ["1 tbsp", "apple cider vinegar"],
            ["1 tbsp", "jamaican jerk rub"],
            ["2 tbsp", "brown sugar"],
            ["1 tbsp", "vegetable oil"]
        ],
        "instructions": [
            "Combine all ingredients (except oil) in a medium bowl.",
            "Refrigerate for 10-30 min.",
            "Heat oil in skillet over medium heat",
            "Cook chicken & marinade until liquid evaporates"
        ]
    },
    {
        "title": "Apricot Chicken",
        "prep_time": 20,
        "cook_time": 30,
        "servings": 4,
        "temperature": 425,
        "category": "main dish",
        "ingredients": [
            ["1 head", "broccoli"],
            ["1 lb", "chicken breast"],
            ["1/2 tsp", "garlic powder"],
            ["3 tbsp", "flour"],
            ["3 tbsp", "olive oil"],
            ["3/4 cup", "apricot jam"],
            ["1 clove", "garlic"],
            ["2 tbsp", "soy sauce"],
            ["1 1/2 tbsp", "brown sugar"],
            ["1 cup", "rice"]
        ],
        "instructions": [
            "Preheat oven to 425",
            "Place broccoli on baking sheet and drizzle olive oil, salt, pepper",
            "Roast for 15 to 20 minutes (until charred)",
            "Toss chicken with salt, pepper, garlic powder",
            "Toss chicken with flour until coated",
            "Start cooking rice",
            "Heat large skillet over medium heat with oil",
            "Cook chicken 5-6 min per side",
            "Whisk together jam, minced garlic, soy sauce, brown sugar",
            "Have a wonderful dinner!"
        ]
    },
    {
        "title": "Quiche",
        "prep_time": 10,
        "cook_time": 40,
        "rating": 6.5,
        "servings": 4,
        "temperature": 375,
        "category": "breakfast",
        "ingredients": [
            ["6", "eggs"],
            ["3/4 cup", "milk"],
            ["Some", "salt & pepper"],
            ["1 cup", "cooked ham"],
            ["1 1/2 cup", "shredded cheese"],
            ["3 tbsp", "green onions"],
            ["1", "pie crust", "refrigerated"],
        ],
        "instructions": [
            "Preheat oven to 375",
            "Unroll pie crust and press into 9 inch pie plate",
            "In large bowl, whisk eggs, milk, salt, pepper",
            "Sprinkle ham, cheese and green onions on pie crust. Pour egg mixture over and sprinkle more cheese on top.",
            "Bake 35-40 min (until eggs are set). Cool 5-10 min"
        ]
    },
    {
        "title": "Overnight Oats",
        "prep_time": 10,
        "cook_time": 120,
        "servings": 1,
        "category": "breakfast",
        "ingredients": [
            ["1/2 cup", "rolled oats"],
            ["1/2 cup", "milk"],
            ["1/4 cup", "greek yogurt"],
            ["1 tbsp", "chia seeds"],
            ["1 tbsp", "honey"],
            ["1/4 tsp", "vanilla extract"]
        ],
        "instructions": [
            "Mix all ingredients in a glass container",
            "Cover glass and place in fridge for 2 hours to 5 days",
            "Uncover and enjoy!"
        ]
    },
    {
        "title": "Pizza (store-bought crust)",
        "prep_time": 15,
        "cook_time": 15,
        "servings": 4,
        "temperature": 425,
        "category": "italian",
        "ingredients": [
            ["1", "pizza crust"],
            ["1/2 jar", "pizza sauce"],
            ["6 oz","Shredded cheese"]
        ],
        "instructions": [
            "Follow instructions on pizza crust package"
        ]
    },
    {
        "title": "Pizza (homemade crust)",
        "prep_time": 150,
        "cook_time": 15,
        "servings": 4,
        "temperature": 425,
        "category": "italian",
        "ingredients": [
            ["1 1/2 cups", "warm water"],
            ["2 tsp", "sugar"],
            ["2 tsp", "salt"],
            ["1 tbsp", "olive oil"],
            ["4 cups", "all-purpose flour"],
            ["1 tbsp", "yeast"],
            ["1/2 jar", "pizza sauce"],
            ["6 oz","Shredded cheese"]
        ],
        "instructions": [
            "Mix warm water, sugar, salt, and yeast in a bowl. Let sit for 5 minutes.",
            "Add olive oil and flour to the mixture. Knead until smooth.",
            "Let dough rise for 1-2 hours until doubled in size.",
            "Preheat oven to 425°F.",
            "Roll out dough on a floured surface to desired thickness.",
            "Place on a pizza stone or baking sheet.",
            "Spread pizza sauce and sprinkle cheese on top.",
            "Bake for 15 minutes or until crust is golden brown."
        ]
    },
    {
        "title": "Sheetpan sausage, potatoes & peppers",
        "category": "main dish"
    },
    {
        "title": "Fried Rice",
        "prep_time": 30,
        "cook_time": 0,
        "servings": 10,
        "category": "main dish",
    },
    {
        "title": "Lasagna",
        "prep_time": 40,
        "cook_time": 60,
        "servings": 10,
        "temperature": 350,
        "category": "italian",
        "ingredients": [
            ["8-10 oz", "lasagna noodles"],
            ["1/2 cup", "onion", "diced"],
            ["1 lb", "ground beef"],
            ["1 lb", "pork sausage"],
            ["1 clove", "garlic", "minced"],
            ["1/2 tsp", "oregano"],
            ["1/2 tsp", "basil"],
            ["some", "salt and pepper"],
            ["1 lb", "tomatoes"],
            ["12 oz", "tomato paste"],
            ["16 oz", "cottage cheese", "sm curd"],
            ["1/2 cup", "parmesan cheese"],
            ["8 oz", "mozzarella cheese"],
            ["1 tsp", "parsley"],
            ["2", "eggs"]
        ],
        "instructions": [
            "Brown hamburger and onion",
            "Brown pork sausage and mix with hamburger/onion",
            "Add garlic, oregano, basil, salt, tomato, tomato paste to meat",
            "Cook 8-10 oz of lasagna noodles",
            "Cheese layer: Mix cottage, mozzarella, and parmesan cheeses with eggs and parsley",
            "Place a little tomato juice in 9x13 pan",
            "Layer noodles, cheese, meat sauce (x2)",
            "Sprinke parmesan on top",
            "Bake at 350 for 1 hour"
        ]
    },
    {
        "title": "Chicken Pesto Bagels",
        "prep_time": 10,
        "cook_time": 15,
        "servings": 6,
        "temperature": 350,
        "category": "main dish",
        "ingredients": [
            ["6", "Bagels"],
            ["1 can", "Pesto Sauce"],
            ["12", "chicken strips", "grilled"],
            ["Some", "sundried tomatoes"],
            ["8 oz", "mozzarella cheese"],
        ],
        "instructions": [
            "Preheat oven to 350",
            "Cut bagel in ½ and place on cookie sheet",
            "Spread Pesto Sauce on bagel halves",
            "Put meat on top of pesto sauce",
            "Put sundried tomatoes on top of meat",
            "Put cheese on top of tomatoes",
            "Bake in oven for 10-15 minutes"
        ]
    },
    {
        "title": "Scalloped Potatoes + Ham",
        "prep_time": 45,
        "cook_time": 60,
        "servings": 6,
        "temperature": 400,
        "category": "main dish",
        "ingredients": [
            ["6", "Potatoes", "Medium-sized"],
            ["2 cups","ham", "cooked"],
            ["1 1/2 cup", "shredded cheese", "cheddar"],
            ["1/4 cup", "flour"],
            ["8 oz", "mozzarella cheese"],
            ["3 cups", "milk"],
            ["1 1/2 tsp", "salt"],
            ["3/4 tsp", "pepper"],
            ["3/4 tsp", "onion powder"]
        ],
        "instructions": [
            "Slice potatoes very thinly and cube ham into 1/2 inch pieces",
            "Grease 9x9 pan and preheat oven to 400",
            "Whisk milk and flour in medium bowl",
            "Mix salt, pepper, onion powder together",
            "Lay 1/3 of potatoes on greased pan shingle style",
            "Put 1/3 seasonings, 1/3 ham, and 1/3 cheese on top",
            "2nd Layer: Repeat last two steps",
            "3rd Layer: Repeat but pour milk mixture on before cheese. Milk should almost cover potatoes.",
            "Bake covered for 30 min, then uncovered for another 30 min.",
            "Note: put a pan underneath in case of bubble over"
        ]
    },
    {
        "title": "Chicken Roll Ups",
        "prep_time": 20,
        "cook_time": 20,
        "servings": 6,
        "temperature": 350,
        "category": "main dish",
        "ingredients": [
            ["2 pkgs", "crescent rolls"],
            ["2 cups", "chicken", "cooked"],
            ["4 oz", "cream cheese"],
            ["2-3 tsp", "lemon pepper"],
            ["7 oz", "mushrooms"],
            ["4 tsp", "butter"],
            ["1 cup", "bread crumbs"],
            ["2/3 cup", "pecans", "chopped"]
        ],
        "instructions": [
            "Cook and dice chicken",
            "Mix bread crumbs and pecans (Set aside)",
            "Mix chicken, cheese, lemon pepper, mushrooms",
            "Flatten crescent rolls into rectangles",
            "Spoon chicken mixture on crescent rectangle",
            "Roll up and dip in butter",
            "Roll in bread crumbs and place on baking sheet",
            "Bake at 350 for 20 min (golden brown)"
        ]
    },
    {
        "title": "Broccoli Salad",
        "prep_time": 15,
        "cook_time": 10,
        "rating": 8,
        "servings": 6,
        "category": "side dish",
        "ingredients": [
            ["6 slices", "bacon", "chopped"],
            ["1 1/2 heads", "broccoli", "cut into florets"],
            ["1", "onion", "chopped"],
            ["1", "apple", "chopped"],
            ["1 cup", "sunflower seeds", ""],
            ["2/3 cup", "raisins", ""],
            ["1/2 cup", "plain low-fat yogurt", ""],
            ["1/4 cup", "light mayonnaise", ""],
            ["1/4 cup", "lemon juice", ""],
            ["1 tbsp", "sugar", ""],
            ["", "pepper", "to taste"]
        ],
        "instructions": [
            "Fry the bacon in a skillet over medium heat until cooked. Drain on a paper towel and set aside.",
            "Clean and floret the broccoli.",
            "Mix the bacon, broccoli, onion, apple, sunflower seeds and raisins in a large salad bowl.",
            "To make the dressing, mix the mayonnaise, yogurt, lemon juice, sugar, and pepper in a small bowl.",
            "Toss the salad with the dressing."
        ]
    },
    {
        "title": "Fettuccine Carbonara",
        "prep_time": 10,
        "cook_time": 15,
        "rating": 10,
        "servings": 4,
        "category": "italian",
        "ingredients": [
            ["1 lb", "fettuccine", ""],
            ["6 slices", "bacon", "chopped"],
            ["1 tbsp", "olive oil", ""],
            ["1 tsp", "garlic", "minced"],
            ["4", "eggs", ""],
            ["1/4 cup", "Parmesan cheese", ""],
            ["2 tbsp", "parsley", "chopped"],
            ["", "salt", "to taste"],
            ["", "pepper", "to taste"]
        ],
        "instructions": [
            "Cook the fettuccine al dente.",
            "In a large pot, sauté the bacon over medium heat until crispy, about 6 minutes. Drain on paper towels.",
            "Pour off all of the fat in the pan except for 1 tbsp and add 1 tbsp olive oil.",
            "Add the garlic and sauté for 1 minute.",
            "Beat the eggs. Add the bacon and pasta back to the pan. Toss with the eggs, whisking quickly until the eggs thicken and cook in the pasta.",
            "Add the Parmesan and salt and pepper to taste.",
            "Serve and garnish with parsley."
        ]
    },
    {
        "title": "Meatballs (Meatloaf Style)",
        "prep_time": 30,
        "cook_time": 60,
        "rating": 9,
        "servings": 6,
        "category": "italian",
        "ingredients": [
            ["2 lb", "hamburger", ""],
            ["1 lb", "pork", ""],
            ["2 cups", "oatmeal", ""],
            ["1", "small onion", "chopped"],
            ["1 can", "evaporated milk", ""],
            ["1/2 tsp", "salt", ""],
            ["1/2 tsp", "garlic salt", ""],
            ["1/2 tsp", "chili powder", ""],
            ["2", "eggs", ""],
            ["2 cups", "ketchup", ""],
            ["1 tbsp", "liquid smoke", ""],
            ["1/2 tsp", "garlic salt", ""],
            ["2 cups", "brown sugar", ""],
            ["1 cup", "onions", "diced"]
        ],
        "instructions": [
            "Preheat oven to 350°F.",
            "Mix together hamburger, pork, oatmeal, chopped onion, evaporated milk, salt, garlic salt, chili powder, and eggs.",
            "Form into meatballs and place in a baking dish.",
            "In a saucepan, combine ketchup, liquid smoke, garlic salt, brown sugar, and diced onions. Cook to a boil.",
            "Pour sauce over meatballs.",
            "Bake uncovered at 350°F for 1 hour."
        ]
    },
    {
        "title": "Buttermilk Pancakes",
        "prep_time": 15,
        "cook_time": 15,
        "rating": 9,
        "servings": 4,
        "category": "breakfast",
        "ingredients": [
            ["3", "eggs", "separated"],
            ["1 2/3 cups", "buttermilk", ""],
            ["1 tsp", "baking soda", ""],
            ["1 1/2 cups", "all-purpose flour", "sifted"],
            ["1 tbsp", "sugar", ""],
            ["1 tsp", "salt", ""],
            ["1 tsp", "vanilla", ""],
            ["3 tbsp", "butter", "melted"]
        ],
        "instructions": [
            "Separate the eggs.",
            "Beat egg whites until stiff; set aside.",
            "Beat egg yolks in a large bowl.",
            "Add buttermilk, baking soda, sifted flour, sugar, salt, vanilla, and melted butter to the egg yolks and mix well.",
            "Fold in the beaten egg whites gently.",
            "Let the batter sit for 10 minutes.",
            "Cook on a hot griddle or pan until bubbles form and the edges are dry."
        ]
    },
    {
        "title": "Mashed Turnips and Potatoes",
        "prep_time": 10,
        "cook_time": 25,
        "rating": 6,
        "servings": 6,
        "category": "side dish",
        "ingredients": [
            ["1 1/2 pounds", "turnips", "peeled and diced"],
            ["1 pound", "Yukon Gold potatoes", "peeled and diced"],
            ["5 tbsp", "unsalted butter", "melted"],
            ["1/2 cup", "milk", "hot"],
            ["1/2 tbsp", "chopped fresh herbs", "finely chopped (thyme, rosemary, sage)"],
            ["1/4 tsp", "garlic powder", ""],
            ["", "salt", "to taste"],
            ["", "pepper", "to taste"]
        ],
        "instructions": [
            "In a medium sized pot, boil the diced turnips and diced potatoes until fork-tender. Drain well.",
            "Mash the drained vegetables to your desired consistency.",
            "Stir in the hot milk, melted butter and chopped herbs. Season with salt and pepper to your taste.",
            "Serve warm and enjoy."
        ]
    },
    {
        "title": "Squash Soup",
        "prep_time": 15,
        "cook_time": 25,
        "rating": 3,
        "servings": 6,
        "category": "side dish",
        "ingredients": [
            ["1", "onion", ""],
            ["1 stalk", "celery", ""],
            ["2 tsp", "canola oil", ""],
            ["1", "butternut squash", ""],
            ["2", "apples", ""],
            ["1", "potato", ""],
            ["4 cups", "water", ""],
            ["1 tsp", "ginger", ""],
            ["1/2 tsp", "cinnamon", ""],
            ["", "pepper", "to taste"],
            ["2 tsp", "brown sugar", ""],
            ["1 cup", "yogurt", "plain low-fat"],
            ["1 cup", "pecans", "pieces"]
        ],
        "instructions": [
            "Chop the onion and celery. Sauté them in the oil in a large saucepan over medium heat until tender.",
            "Peel, core, seed and chop the butternut squash, apples and potato. Add to saucepan.",
            "Add water, cinnamon, ginger and pepper to the saucepan. Bring to a boil.",
            "Simmer for 12 minutes until the potato is tender. Remove from heat and blend until smooth in a blender.",
            "Return the soup to the saucepan. Add brown sugar and bring to a boil. Remove from heat.",
            "Top with yogurt and nuts."
        ]
    },
    {
        "title": "Tomato Penne",
        "prep_time": 10,
        "cook_time": 15,
        "rating": 10,
        "servings": 6,
        "category": "italian",
        "ingredients": [
            ["1 1/4 lbs", "penne", ""],
            ["1 tbsp", "canola oil", ""],
            ["2 tsp", "garlic", "minced"],
            ["28 oz", "diced tomatoes", "canned"],
            ["12", "black olives", "pitted"],
            ["1/2 cup", "parsley", "chopped"],
            ["1/4 cup", "basil", "torn"],
            ["1 tsp", "thyme", ""],
            ["6 oz", "feta cheese", ""],
            ["1/2 cup", "parmesan", "grated"]
        ],
        "instructions": [
            "Cook the penne in boiling water al dente.",
            "In a large skillet, sauté the garlic in oil over medium heat for 2 minutes until soft.",
            "Add the tomatoes and cook for 4 minutes.",
            "Drain the cooked pasta. Set aside 1/3 of the pasta for Tuesday’s lunch.",
            "Add the remaining penne to the pan. Toss the penne with the olives, the parsley, and the basil.",
            "Sprinkle with thyme, feta, and Parmesan cheeses."
        ]
    },
    {
        "title": "Chicken Fajitas",
        "prep_time": 10,
        "cook_time": 10,
        "rating": 0,
        "servings": 4,
        "category": "mexican",
        "ingredients": [
            ["1 1/2 lbs", "Chicken breasts", "cut into 1/4 inch strips"],
            ["1", "Red pepper", "sliced"],
            ["1", "Green pepper", "sliced"],
            ["1/2", "Red onion", "thinly sliced"],
            ["1 tbsp", "Canola oil", ""],
            ["1 tsp", "Chili powder", ""],
            ["1 tsp", "Coriander", ""],
            ["1 tsp", "Cumin", ""],
            ["1 tsp", "Oregano", ""],
            ["to taste", "Pepper", ""],
            ["1 tsp", "Garlic", ""],
            ["2 tsp", "Lemon juice", ""],
            ["dash", "Hot sauce", ""],
            ["dash", "Worcestershire sauce", ""]
        ],
        "instructions": [
            "Cut the chicken into 1/4 inch strips.",
            "Heat oil in a skillet over medium heat. Add chicken and spices. Stir-fry for 4-5 minutes until golden brown and no longer pink inside. Remove from heat, drain, and set aside.",
            "Add garlic and vegetables to the skillet. Stir-fry for about 3 minutes until tender but still crisp.",
            "Return chicken to skillet. Add lemon juice, hot sauce, and Worcestershire sauce. Heat through.",
            "Serve with tortillas, guacamole, sour cream, salsa, queso, and lettuce."
        ],
        "note": "Don't be afraid to overcook the veggies. Add seasoning to rice."
    },
    {
        "title": "Feta Fusilli",
        "prep_time": 15,
        "cook_time": 15,
        "rating": 0,
        "servings": 4,
        "category": "italian",
        "ingredients": [
            ["1 lb", "Whole grain fusilli", ""],
            ["3 cups", "Green beans", "cut into bite-sized pieces"],
            ["1/2 head", "Broccoli", "cut into bite-sized pieces"],
            ["1", "Red pepper", "julienned"],
            ["1/3 cup", "Olive oil", ""],
            ["1/4 cup", "Red wine vinegar", ""],
            ["2 tsp", "Lemon juice", ""],
            ["2 tbsp", "Oregano", ""],
            ["2 tbsp", "Parsley", "chopped fresh"],
            ["8 oz", "Feta cheese", "crumbled"],
            ["12", "Black olives", "pitted"],
            ["4", "Tomatoes", "quartered"]
        ],
        "instructions": [
            "Cook chicken and peppers together and let the peppers cook",
            "Cook the fusilli al dente.",
            "Steam the green beans and broccoli until tender but crisp.",
            "Add the beans, broccoli, and red pepper to the drained pasta.",
            "Combine olive oil, red wine vinegar, lemon juice, oregano, and parsley in a bowl.",
            "Toss the pasta and vegetables with the dressing.",
            "Add feta cheese and olives. Serve with the quartered tomatoes."
        ],
        "note": "Add red wine vinegar separate. Rachel doesn't like it."
    },
    {
        "title": "Chicken Fingers",
        "prep_time": 15,
        "cook_time": 12,
        "rating": 10,
        "servings": 4,
        "category": "main dish",
        "ingredients": [
            ["1 lb", "Chicken breasts", "skinned, deboned, sliced into 1-inch strips"],
            ["1/2 cup", "Flour", ""],
            ["2", "Eggs", "beaten"],
            ["1 cup", "Breadcrumbs", ""],
            ["2/3 cup", "Parmesan cheese", "grated"],
            ["1 tbsp", "Oregano", ""],
            ["1 tbsp", "Paprika", ""],
            ["1 tbsp", "Basil", ""]
        ],
        "instructions": [
            "Preheat oven to 450°F.",
            "Set up 3 wide-mouthed bowls: one with flour, one with beaten eggs, and one with a mixture of breadcrumbs, Parmesan cheese, oregano, paprika, and basil.",
            "Dip each chicken strip into the flour, then into the egg, and finally into the breadcrumb mixture to coat.",
            "Lay the coated chicken strips on a slightly greased baking sheet.",
            "Bake for 6 minutes on each side, until crisp and cooked through."
        ]
    },
    {
        "title": "Pumpkin Chocolate Chip Muffins",
        "prep_time": 10,
        "cook_time": 20,
        "rating": 0,
        "servings": 12,
        "category": "breakfast",
        "ingredients": [
            ["1 cup", "Flour", ""],
            ["2/3 cup", "Sugar", ""],
            ["1/4 tsp", "Salt", ""],
            ["3/4 tsp", "Baking Powder", ""],
            ["3/4 tsp", "Baking Soda", ""],
            ["1/4 tsp", "Cinnamon", ""],
            ["2", "Large eggs", ""],
            ["1/2 cup", "Oil", ""],
            ["2/3 cup", "Pumpkin", ""],
            ["2/3 cup", "Chocolate Chips", ""]
        ],
        "instructions": [
            "In a mixing bowl, combine all dry ingredients.",
            "In a separate bowl, combine all wet ingredients.",
            "Combine dry and wet ingredients together.",
            "Once mixed, fold in chocolate chips.",
            "Portion muffin batter into muffin tins (about 1/4 cup per muffin).",
            "Bake at 350°F for 18–20 minutes."
        ]
    },
    {
        "title": "Shepherd's Pie",
        "prep_time": 20,
        "cook_time": 25,
        "rating": 0,
        "servings": 4,
        "category": "main dish",
        "ingredients": [
            ["5 large", "Yellow potatoes", ""],
            ["1/4 cup", "Milk", ""],
            ["1 tsp", "Garlic", "minced"],
            ["1", "Onion", "finely chopped"],
            ["1 lb", "Ground beef", ""],
            ["1 can (14 oz)", "Cream Style Corn", ""],
            ["1 cup", "Frozen corn niblets", ""],
            ["to taste", "Worcestershire sauce", ""],
            ["to taste", "Hot sauce", ""],
            ["to taste", "Pepper", ""],
            ["1 tsp", "Paprika", ""]
        ],
        "instructions": [
            "Clean the potatoes and cook in boiling water until just done. Do not overcook.",
            "Mash potatoes with milk and garlic. Set aside.",
            "In a skillet, brown the meat with the onion and garlic until cooked. Season with salt and pepper.",
            "Mix Worcestershire sauce and hot sauce together first, then add to the meat.",
            "Lay the meat mixture in the bottom of a large baking dish.",
            "Heat both corns in a small saucepan and spread over the meat.",
            "Lay the mashed potatoes over the corn and sprinkle with paprika.",
            "Brown under the broiler until golden."
        ],
        "note": "Mix sauces first, then put on meat."
    },
    {
        "title": "Fruit Cobbler",
        "prep_time": 10,
        "cook_time": 45,
        "temperate": 350,
        "rating": 0,
        "servings": 8,
        "category": "dessert",
        "ingredients": [
            ["21 oz", "Fruit Filling", ""],
            ["1 pkg", "Yellow Cake Mix", ""],
            ["1/2 cup", "Butter", ""]
        ],
        "instructions": [
            "Preheat to 350°F.",
            "Spray 8x8 pan and pour pie filling in evenly.",
            "In a bowl, combine butter and cake mix.",
            "Spread cake mix over pie filling.",
            "Bake for 45 min until top is golden brown."
        ],
        "note": "Serve with ice cream."
    },
    {
        "title": "Pumpkin Roll",
        "prep_time": 20,
        "cook_time": 105,
        "rating": 9,
        "temperature": 350,
        "servings": 8,
        "category": "Dessert",
        "ingredients": [
            ["3/4 cup", "Flour", ""],
            ["1/2 tsp", "Salt", ""],
            ["1 tsp", "Baking soda", ""],
            ["1 tsp", "Ground cinnamon", ""],
            ["1 tsp", "Pumpkin pie spice", ""],
            ["1 cup", "Granulated sugar", ""],
            ["3", "eggs", "large"],
            ["2/3 cup", "Canned pumpkin", ""],
            ["1 tsp", "Vanilla extract", ""],
            ["8 oz", "Cream cheese", "softened"],
            ["2 tbsp", "Butter", "softened"],
            ["1 tsp", "Vanilla extract", ""],
            ["1 cup", "Powdered sugar", "plus more for dusting"]
        ],
        "instructions": [
            "Preheat oven to 350°F.",
            "Lightly grease a 10x15-inch jelly roll pan with nonstick spray. Line with parchment paper, leaving extra overhang on the long sides for lifting. Lightly grease the paper.",
            "In a large bowl, whisk together flour, salt, baking soda, cinnamon, and pumpkin pie spice.",
            "In a separate bowl, mix eggs, sugar, vanilla, and pumpkin until smooth.",
            "Combine wet and dry ingredients, stirring until just blended and no dry streaks remain.",
            "Spread batter evenly in the prepared pan and bake for 12-15 minutes, until a toothpick inserted in the center comes out clean.",
            "Immediately lift the parchment paper and cake out of the pan. While hot, starting from a short end, gently roll the cake (with parchment) into a log. Cool completely on a wire rack.",
            "Meanwhile, make frosting: beat cream cheese, butter, vanilla, and powdered sugar together until fluffy and smooth.",
            "Once the cake is fully cooled, unroll gently and spread the frosting evenly, leaving a 1-inch border.",
            "Roll the cake back up (without the parchment). Wrap in plastic and refrigerate for at least 1 hour.",
            "Before serving, dust with powdered sugar, slice, and serve."
        ]
    },
    {
        "title": "Roasted Zucchini",
        "prep_time": 5,
        "cook_time": 10,
        "rating": 7,
        "temperature": 450,
        "servings": 4,
        "category": "Side Dish",
        "ingredients": [
            ["2 medium", "Zucchini", "cut into 1/2 inch thick rounds"],
            ["2 tbsp", "olive oil", "extra-virgin"],
            ["1/2 tsp", "salt", ""],
            ["1/2 tsp", "black pepper", ""],
            ["1 tsp", "garlic powder", ""],
            ["1/2 cup", "Parmesan cheese", "grated"]
        ],
        "instructions": [
            "Preheat oven to 450°F and position a rack in the center.",
            "In a large bowl, toss zucchini with olive oil, salt, pepper, and garlic powder until evenly coated.",
            "Arrange zucchini rounds on a rimmed sheet pan in a single layer.",
            "Sprinkle evenly with Parmesan cheese.",
            "Bake for 5 minutes, then switch the oven to broil on High.",
            "Continue baking for 2-3 minutes, or until the cheese is golden brown and zucchini is tender.",
            "Serve immediately, adding extra salt to taste if desired."
        ]
    },
    {
        "title": "Meatballs (oven-baked)",
        "prep_time": 15,
        "cook_time": 20,
        "rating": 10,
        "temperature": 400,
        "servings": 5,
        "category": "Main Dish",
        "ingredients": [
            ["1 lb", "Ground beef", "80% lean (or half pork)"],
            ["1", "Large egg", "beaten"],
            ["1/4 cup", "Breadcrumbs", ""],
            ["1/4 cup", "Parmesan cheese", "grated"],
            ["1/4 cup", "onion", "finely chopped"],
            ["2 tsp", "garlic", "minced"],
            ["3/4 tsp", "salt", ""],
            ["1/4 tsp", "pepper", ""],
            ["2 tbsp", "parsley", "optional"],
            ["2 cups", "Marinara sauce", "optional, for serving"]
        ],
        "instructions": [
            "Preheat oven to 400°F. Line a baking sheet with foil and spray with non-stick cooking spray.",
            "In a large bowl, combine ground beef, egg, breadcrumbs, Parmesan cheese, onion, garlic, salt, pepper, and parsley (if using). Mix until just combined.",
            "Use a medium cookie scoop or spoon to form 1 1/2-inch meatballs. Place them evenly on the prepared baking sheet.",
            "Bake uncovered for 17-20 minutes, turning halfway through, until the meatballs are browned and no longer pink inside.",
            "Serve with marinara sauce, noodles, and additional Parmesan, basil, or parsley if desired."
        ]
    },
    {
        "title": "Brownies",
        "prep_time": 5,
        "cook_time": 45,
        "rating": 9,
        "temperature": 325,
        "servings": 16,
        "category": "Dessert",
        "ingredients": [
            ["1 1/2 cups", "Granulated sugar", ""],
            ["3/4 cup", "All-purpose flour", ""],
            ["2/3 cup", "Cocoa powder", "sifted if lumpy"],
            ["1/2 cup", "Powdered sugar", "sifted if lumpy"],
            ["1/2 cup", "Dark chocolate chips", ""],
            ["3/4 tsp", "Sea salt", ""],
            ["2", "Large eggs", ""],
            ["1/2 cup", "Canola oil or extra-virgin olive oil", ""],
            ["2 tbsp", "Water", ""],
            ["1/2 tsp", "Vanilla extract", ""]
        ],
        "instructions": [
            "Preheat oven to 325°F.",
            "Lightly spray an 8x8-inch baking dish with cooking spray and line it with parchment paper. Spray the parchment as well.",
            "In a medium bowl, combine sugar, flour, cocoa powder, powdered sugar, chocolate chips, and salt.",
            "In a large bowl, whisk together eggs, oil, water, and vanilla.",
            "Sprinkle the dry mix over the wet mix and stir until just combined. Batter will be thick.",
            "Pour batter into the prepared pan and smooth the top with a spatula.",
            "Bake for 40–48 minutes, or until a toothpick inserted in the center comes out with only a few crumbs attached.",
            "Allow to cool completely in the pan before cutting into 16 brownies."
        ]
    },
    {
        "title": "Blueberry Baked Oatmeal",
        "prep_time": 10,
        "cook_time": 45,
        "rating": 9,
        "temperature": 375,
        "servings": 8,
        "category": "Breakfast",
        "ingredients": [
            ["2/3 cup", "Pecans", "roughly chopped"],
            ["2 cups", "oats", "old-fashioned"],
            ["2 tsp", "Cinnamon", ""],
            ["1 tsp", "Baking powder", ""],
            ["3/4 tsp", "salt", ""],
            ["1/4 tsp", "Nutmeg", ""],
            ["1 3/4 cups", "Milk", ""],
            ["1/3 cup", "Maple syrup", "or honey"],
            ["2", "Large eggs", ""],
            ["3 tbsp", "Unsalted butter", "or coconut oil, melted"],
            ["2 tsp", "Vanilla extract", ""],
            ["12 oz", "Blueberries", ""],
            ["2 tsp", "Raw sugar", "optional for topping"],
            ["", "Yogurt or whipped cream", "optional for serving"],
            ["", "Maple syrup or honey", "optional for drizzling"],
            ["", "Fresh fruit", "optional for serving"]
        ],
        "instructions": [
            "Preheat oven to 375°F and grease a 9-inch square baking dish.",
            "Once oven is preheated, spread pecans on a rimmed baking sheet and toast for 4–5 minutes, until fragrant.",
            "In a medium bowl, whisk together oats, toasted pecans, cinnamon, baking powder, salt, and nutmeg.",
            "In another bowl, whisk milk, maple syrup (or honey), eggs, half the melted butter (or coconut oil), and vanilla until blended.",
            "Reserve about 1/2 cup of the berries for topping. Spread remaining berries evenly over the bottom of the baking dish.",
            "Pour the dry oat mixture evenly over the fruit, then drizzle the wet mixture over the oats. Tilt or wiggle the dish to help the liquid absorb. Lightly press down any dry oats.",
            "Scatter the reserved berries on top and sprinkle with raw sugar if desired.",
            "Bake for 42–45 minutes (45–50 minutes if using frozen fruit) until golden and set.",
            "Let cool for a few minutes, then drizzle remaining melted butter over the top before serving.",
            "Serve warm, room temperature, or chilled with yogurt, syrup, or fruit as desired. Store covered in the refrigerator for up to 4–5 days."
        ],
        "note": "If using coconut oil, it may solidify when mixed with cold ingredients—microwave briefly until melted again. Keeps well in the fridge for up to 5 days."
    },
    {
        "title": "Chocolate Chip Cookies",
        "prep_time": 10,
        "cook_time": 8,
        "rating": 10,
        "temperature": 375,
        "servings": 36,
        "category": "Dessert",
        "ingredients": [
            ["1 cup", "Salted butter", "softened"],
            ["1 cup", "Granulated sugar", ""],
            ["1 cup", "Light brown sugar", "packed"],
            ["2 tsp", "Vanilla extract", "pure"],
            ["2", "Large eggs", ""],
            ["3 cups", "All-purpose flour", ""],
            ["1 tsp", "Baking soda", ""],
            ["1/2 tsp", "Baking powder", ""],
            ["1 tsp", "Sea salt", ""],
            ["2 cups", "Chocolate chips", "about 12 oz"]
        ],
        "instructions": [
            "Preheat oven to 375°F. Line three baking sheets with parchment paper.",
            "In a medium bowl, mix flour, baking soda, baking powder, and salt. Set aside.",
            "In a large bowl, cream together butter and sugars until combined.",
            "Beat in eggs and vanilla until light and fluffy, about 1 minute.",
            "Gradually mix in dry ingredients until just combined.",
            "Fold in chocolate chips until evenly distributed.",
            "Roll 2 to 3 tablespoons of dough per cookie into balls and place evenly on prepared baking sheets.",
            "Bake for 8 to 10 minutes, until cookies are just starting to brown at the edges.",
            "Let cookies rest on the pan for 5 minutes before transferring to a cooling rack."
        ],
        "note": "For soft and chewy cookies, remove from oven while centers still look slightly underbaked—they'll finish cooking on the pan."
    },
    {
        "title": "Pork Chops, Potatoes, and Broccoli",
        "prep_time": 10,
        "cook_time": 30,
        "rating": 9,
        "temperature": 425,
        "servings": 4,
        "category": "Main Dish",
        "ingredients": [
            ["4", "Boneless pork chops", "thick-cut"],
            ["", "Salt and pepper", "to taste"],
            ["1 tsp", "Garlic powder", ""],
            ["1 tsp", "Italian herb seasoning", "or Herbs de Provence"],
            ["1/2 tsp", "Smoked paprika", ""],
            ["2 tsp", "Dry ranch seasoning", ""],
            ["3 cups", "Broccoli florets", ""],
            ["3 tbsp", "Olive oil", "1 tbsp for broccoli, 2 tbsp for potatoes"],
            ["1 lb", "Baby gold or red potatoes", "cut in half"],
            ["2 tsp", "Garlic powder", "for potatoes"],
            ["1/3 cup", "Parmesan cheese", "grated, for potatoes"]
        ],
        "instructions": [
            "Preheat oven to 425°F and grease a large baking sheet.",
            "In a bowl, toss potatoes with olive oil, salt, pepper, garlic powder, and Parmesan. Spread on one-third of the pan and bake for 5-10 minutes.",
            "Meanwhile, season pork chops on both sides with salt, pepper, garlic powder, Italian herbs, paprika, and ranch seasoning.",
            "Add pork chops to the center third of the pan. Bake for 10 minutes.",
            "While pork cooks, toss broccoli with olive oil, salt, and pepper. Add to the final third of the pan.",
            "Bake another 10-15 minutes, until broccoli and potatoes are tender and pork reaches 145°F internally.",
            "Let pork rest 3-5 minutes before serving with potatoes and broccoli."
        ],
        "note": "For best results, stagger baking times so each item cooks perfectly—potatoes first, then pork, then broccoli."
    },
    {
        "title": "Chicken Chow Mein",
        "prep_time": 10,
        "cook_time": 25,
        "rating": 8,
        "servings": 4,
        "category": "Main Dish",
        "ingredients": [
            ["2 tbsp", "Butter", "for sautéing"],
            ["4 tbsp", "Minced onion", ""],
            ["1 cup", "Whole button mushrooms", ""],
            ["1 1/2 cups", "Shredded cooked chicken", ""],
            ["1 cup", "Diced celery", ""],
            ["1 1/2 cups", "Meat stock or water", ""],
            ["2 tbsp", "Soy sauce", ""],
            ["1 tbsp", "Sugar", ""],
            ["1 1/2 tbsp", "Cornstarch", ""],
            ["3 tbsp", "Cold water", ""],
            ["", "Hot chow mein noodles", "for serving"]
        ],
        "instructions": [
            "In a skillet, melt butter over medium heat. Add minced onion and mushrooms; brown lightly.",
            "Add chicken, celery, stock or water, soy sauce, and sugar. Simmer for 15 minutes.",
            "Blend cornstarch and cold water in a small bowl until smooth. Stir into the meat mixture.",
            "Cook until slightly thickened and clear.",
            "Serve hot over chow mein noodles."
        ],
        "note": "If the sauce thickens too much, add a splash of stock or water to adjust consistency before serving."
    },
    {
        "title": "Baked Chicken Parmesan",
        "prep_time": 10,
        "cook_time": 25,
        "rating": 8,
        "temperature": 450,
        "servings": 4,
        "category": "Main Dish",
        "ingredients": [
            ["1/4 cup", "Mayonnaise", ""],
            ["1", "Egg", ""],
            ["1 tbsp", "Seasoning blend", ""],
            ["4", "Chicken cutlets", "about 1 lb"],
            ["", "Panko breadcrumbs", "for coating"],
            ["", "Marinara sauce", "for topping"],
            ["", "Mozzarella cheese", "shredded, for topping"]
        ],
        "instructions": [
            "Preheat oven to 450°F and line a sheet pan with a rack.",
            "In a large bowl, mix mayonnaise, egg, and seasoning.",
            "Add chicken cutlets and toss to coat.",
            "Coat each cutlet in panko breadcrumbs and place on sheet pan.",
            "Bake for 20 minutes.",
            "Top cutlets with marinara and shredded mozzarella.",
            "Bake an additional 5–7 minutes, until cheese is melted and lightly browned."
        ],
        "note": ""
    }
];
