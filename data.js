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
        "title": "Meatloaf Meatballs",
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
    }
];
