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
            ["1 tsp", "lemon pepper"],
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
    }
];
