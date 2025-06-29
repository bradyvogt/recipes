/* TEMPLATE
{
    "title": "", (REQUIRED)
    "prep_time": #, //minutes
    "cook_time": #, //minutes
    "rating": #, //out of 10
    "servings": #,
    "category": "",
    "ingredients": [
        ["Amount", "Ingredient", "Notes"]
    ],
    "instructions": [
        ""
    ]
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
        "category": "main dish",
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
            "Combine all ingredients (except chicken & oil) in a medium bowl.",
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
        "category": "main dish",
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
        "ingredients": [
            ["1", "pizza crust"],
            ["1/2 jar", "pizza sauce"],
            ["6 oz","Shredded cheese"]
        ]
    },
    {
        "title": "Pizza (homemade crust)",
        "prep_time": 150,
        "cook_time": 15,
        "servings": 4,
    },
    {
        "title": "Meatballs",
         "prep_time": 30,
        "cook_time": 60,
        "servings": 10,
        "ingredients": [
            ["2 lb", "ground beef"],
            ["1 lb", "ground pork"],
            ["2 cups", "oatmeal"],
            ["1 small", "onion", "chopped"],
            ["1 can", "evaporated milk"],
            ["2", "eggs"],
            ["1/2 tsp", "salt"],
            ["1/2 tsp", "garlic salt"],
            ["1 1/2 tsp", "chili powder"]
        ],
        "instructions": [
            "Mix beef, pork, oatmeal, onion, evap. milk, eggs, and spices in large bowl.",
            "Preheat oven to...",
        ]
    },
    {
        "title": "Sheetpan sausage, potatoes & peppers",
    },
        {
        "title": "Pancakes",
    },
    {
        "title": "Fried Rice",
        "prep_time": 30,
        "cook_time": 0,
        "servings": 10
    },
    {
        "title": "Lasagna",
        "prep_time": 40,
        "cook_time": 60,
        "servings": 10,
        "temperature": 350,
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
        "category": "salad",
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
        "category": "main dish",
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
        "title": "Meatballs with Sweet BBQ Sauce",
        "prep_time": 25,
        "cook_time": 60,
        "rating": 9,
        "servings": 6,
        "category": "main dish",
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
        "rating": 8,
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
        "rating": 7,
        "servings": 6,
        "category": "soup",
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
    }
];
