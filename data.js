const recipes = [
    {
        "title": "Beef Enchiladas",
        "prep_time": 30,
        "cook_time": 30,
        "rating": 7,
        "temperature": 350,
        "servings": 6,
        "categories": [
            "mexican"
        ],
        "ingredients": [
            {
                "quantity": "1 lb",
                "name": "ground beef"
            },
            {
                "quantity": "8",
                "name": "tortillas"
            },
            {
                "quantity": "1 can",
                "name": "enchilada sauce"
            },
            {
                "quantity": "10 oz",
                "name": "tomato soup"
            },
            {
                "quantity": "10 oz",
                "name": "cream of chicken"
            },
            {
                "quantity": "1 pkg",
                "name": "taco seasoning"
            },
            {
                "quantity": "16 oz",
                "name": "shredded cheddar"
            }
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
        ],
        "note": ""
    },
    {
        "title": "Jamaican Jerk Chicken",
        "prep_time": 40,
        "cook_time": 20,
        "rating": 0,
        "temperature": 0,
        "servings": 6,
        "categories": [
            "main dish"
        ],
        "ingredients": [
            {
                "quantity": "1 lb",
                "name": "chicken tenders"
            },
            {
                "quantity": "3 tbsp",
                "name": "soy sauce"
            },
            {
                "quantity": "2",
                "name": "green onions"
            },
            {
                "quantity": "1 tbsp",
                "name": "apple cider vinegar"
            },
            {
                "quantity": "1 tbsp",
                "name": "jamaican jerk rub"
            },
            {
                "quantity": "2 tbsp",
                "name": "brown sugar"
            },
            {
                "quantity": "1 tbsp",
                "name": "vegetable oil"
            }
        ],
        "instructions": [
            "Combine all ingredients (except oil) in a medium bowl.",
            "Refrigerate for 10-30 min.",
            "Heat oil in skillet over medium heat",
            "Cook chicken & marinade until liquid evaporates"
        ],
        "note": ""
    },
    {
        "title": "Apricot Chicken",
        "prep_time": 20,
        "cook_time": 30,
        "rating": 0,
        "temperature": 425,
        "servings": 4,
        "categories": [
            "main dish"
        ],
        "ingredients": [
            {
                "quantity": "1 head",
                "name": "broccoli"
            },
            {
                "quantity": "1 lb",
                "name": "chicken breast"
            },
            {
                "quantity": "1/2 tsp",
                "name": "garlic powder"
            },
            {
                "quantity": "3 tbsp",
                "name": "flour"
            },
            {
                "quantity": "3 tbsp",
                "name": "olive oil"
            },
            {
                "quantity": "3/4 cup",
                "name": "apricot jam"
            },
            {
                "quantity": "1 clove",
                "name": "garlic"
            },
            {
                "quantity": "2 tbsp",
                "name": "soy sauce"
            },
            {
                "quantity": "1 1/2 tbsp",
                "name": "brown sugar"
            },
            {
                "quantity": "1 cup",
                "name": "rice"
            }
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
        ],
        "note": ""
    },
    {
        "title": "Quiche",
        "prep_time": 10,
        "cook_time": 40,
        "rating": 6.5,
        "temperature": 375,
        "servings": 4,
        "categories": [
            "breakfast"
        ],
        "ingredients": [
            {
                "quantity": "6",
                "name": "eggs"
            },
            {
                "quantity": "3/4 cup",
                "name": "milk"
            },
            {
                "quantity": "Some",
                "name": "salt & pepper"
            },
            {
                "quantity": "1 cup",
                "name": "cooked ham"
            },
            {
                "quantity": "1 1/2 cup",
                "name": "shredded cheese"
            },
            {
                "quantity": "3 tbsp",
                "name": "green onions"
            },
            {
                "quantity": "1",
                "name": "pie crust",
                "notes": "refrigerated"
            }
        ],
        "instructions": [
            "Preheat oven to 375",
            "Unroll pie crust and press into 9 inch pie plate",
            "In large bowl, whisk eggs, milk, salt, pepper",
            "Sprinkle ham, cheese and green onions on pie crust. Pour egg mixture over and sprinkle more cheese on top.",
            "Bake 35-40 min (until eggs are set). Cool 5-10 min"
        ],
        "note": ""
    },
    {
        "title": "Overnight Oats",
        "prep_time": 10,
        "cook_time": 120,
        "rating": 0,
        "temperature": 0,
        "servings": 1,
        "categories": [
            "breakfast"
        ],
        "ingredients": [
            {
                "quantity": "1/2 cup",
                "name": "rolled oats"
            },
            {
                "quantity": "1/2 cup",
                "name": "milk"
            },
            {
                "quantity": "1/4 cup",
                "name": "greek yogurt"
            },
            {
                "quantity": "1 tbsp",
                "name": "chia seeds"
            },
            {
                "quantity": "1 tbsp",
                "name": "honey"
            },
            {
                "quantity": "1/4 tsp",
                "name": "vanilla extract"
            }
        ],
        "instructions": [
            "Mix all ingredients in a glass container",
            "Cover glass and place in fridge for 2 hours to 5 days",
            "Uncover and enjoy!"
        ],
        "note": ""
    },
    {
        "title": "Pizza (store-bought crust)",
        "prep_time": 15,
        "cook_time": 15,
        "rating": 0,
        "temperature": 425,
        "servings": 4,
        "categories": [
            "italian"
        ],
        "ingredients": [
            {
                "quantity": "1",
                "name": "pizza crust"
            },
            {
                "quantity": "1/2 jar",
                "name": "pizza sauce"
            },
            {
                "quantity": "6 oz",
                "name": "Shredded cheese"
            }
        ],
        "instructions": [
            "Follow instructions on pizza crust package"
        ],
        "note": ""
    },
    {
        "title": "Pizza (homemade crust)",
        "prep_time": 150,
        "cook_time": 15,
        "rating": 0,
        "temperature": 425,
        "servings": 4,
        "categories": [
            "italian"
        ],
        "ingredients": [
            {
                "quantity": "1 1/2 cups",
                "name": "warm water"
            },
            {
                "quantity": "2 tsp",
                "name": "sugar"
            },
            {
                "quantity": "2 tsp",
                "name": "salt"
            },
            {
                "quantity": "1 tbsp",
                "name": "olive oil"
            },
            {
                "quantity": "4 cups",
                "name": "all-purpose flour"
            },
            {
                "quantity": "1 tbsp",
                "name": "yeast"
            },
            {
                "quantity": "1/2 jar",
                "name": "pizza sauce"
            },
            {
                "quantity": "6 oz",
                "name": "Shredded cheese"
            }
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
        ],
        "note": ""
    },
    {
        "title": "Sheetpan sausage, potatoes & peppers",
        "prep_time": 0,
        "cook_time": 0,
        "rating": 0,
        "temperature": 0,
        "servings": 0,
        "categories": [
            "main dish"
        ],
        "ingredients": [],
        "instructions": [],
        "note": ""
    },
    {
        "title": "Fried Rice",
        "prep_time": 30,
        "cook_time": 0,
        "rating": 0,
        "temperature": 0,
        "servings": 10,
        "categories": [
            "main dish"
        ],
        "ingredients": [],
        "instructions": [],
        "note": ""
    },
    {
        "title": "Lasagna",
        "prep_time": 40,
        "cook_time": 60,
        "rating": 0,
        "temperature": 350,
        "servings": 10,
        "categories": [
            "italian"
        ],
        "ingredients": [
            {
                "quantity": "8-10 oz",
                "name": "lasagna noodles"
            },
            {
                "quantity": "1/2 cup",
                "name": "onion",
                "notes": "diced"
            },
            {
                "quantity": "1 lb",
                "name": "ground beef"
            },
            {
                "quantity": "1 lb",
                "name": "pork sausage"
            },
            {
                "quantity": "1 clove",
                "name": "garlic",
                "notes": "minced"
            },
            {
                "quantity": "1/2 tsp",
                "name": "oregano"
            },
            {
                "quantity": "1/2 tsp",
                "name": "basil"
            },
            {
                "quantity": "some",
                "name": "salt and pepper"
            },
            {
                "quantity": "1 lb",
                "name": "tomatoes"
            },
            {
                "quantity": "12 oz",
                "name": "tomato paste"
            },
            {
                "quantity": "16 oz",
                "name": "cottage cheese",
                "notes": "sm curd"
            },
            {
                "quantity": "1/2 cup",
                "name": "parmesan cheese"
            },
            {
                "quantity": "8 oz",
                "name": "mozzarella cheese"
            },
            {
                "quantity": "1 tsp",
                "name": "parsley"
            },
            {
                "quantity": "2",
                "name": "eggs"
            }
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
        ],
        "note": ""
    },
    {
        "title": "Chicken Pesto Bagels",
        "prep_time": 10,
        "cook_time": 15,
        "rating": 0,
        "temperature": 350,
        "servings": 6,
        "categories": [
            "main dish"
        ],
        "ingredients": [
            {
                "quantity": "6",
                "name": "Bagels"
            },
            {
                "quantity": "1 can",
                "name": "Pesto Sauce"
            },
            {
                "quantity": "12",
                "name": "chicken strips",
                "notes": "grilled"
            },
            {
                "quantity": "Some",
                "name": "sundried tomatoes"
            },
            {
                "quantity": "8 oz",
                "name": "mozzarella cheese"
            }
        ],
        "instructions": [
            "Preheat oven to 350",
            "Cut bagel in ½ and place on cookie sheet",
            "Spread Pesto Sauce on bagel halves",
            "Put meat on top of pesto sauce",
            "Put sundried tomatoes on top of meat",
            "Put cheese on top of tomatoes",
            "Bake in oven for 10-15 minutes"
        ],
        "note": ""
    },
    {
        "title": "Scalloped Potatoes + Ham",
        "prep_time": 45,
        "cook_time": 60,
        "rating": 0,
        "temperature": 400,
        "servings": 6,
        "categories": [
            "main dish"
        ],
        "ingredients": [
            {
                "quantity": "6",
                "name": "Potatoes",
                "notes": "Medium-sized"
            },
            {
                "quantity": "2 cups",
                "name": "ham",
                "notes": "cooked"
            },
            {
                "quantity": "1 1/2 cup",
                "name": "shredded cheese",
                "notes": "cheddar"
            },
            {
                "quantity": "1/4 cup",
                "name": "flour"
            },
            {
                "quantity": "8 oz",
                "name": "mozzarella cheese"
            },
            {
                "quantity": "3 cups",
                "name": "milk"
            },
            {
                "quantity": "1 1/2 tsp",
                "name": "salt"
            },
            {
                "quantity": "3/4 tsp",
                "name": "pepper"
            },
            {
                "quantity": "3/4 tsp",
                "name": "onion powder"
            }
        ],
        "instructions": [
            "Slice potatoes very thinly and cube ham into 1/2 inch pieces",
            "Grease 9x13 pan and preheat oven to 400",
            "Whisk milk and flour in medium bowl",
            "Mix salt, pepper, onion powder together",
            "1st Layer (bottom to top): 1/3 potatoes, 1/3 seasonings, 1/3 ham, and 1/3 cheese",
            "2nd Layer: same dang thing",
            "3rd Layer: same dang thing but pour milk mixture on before cheese. Milk should almost cover potatoes.",
            "Bake covered for 30 min, then uncovered for another 30 min.",
            "Note: put a pan underneath in case of bubble over"
        ],
        "note": "put a pan underneath in case of bubble over"
    },
    {
        "title": "Chicken Roll Ups",
        "prep_time": 20,
        "cook_time": 20,
        "rating": 0,
        "temperature": 350,
        "servings": 6,
        "categories": [
            "main dish"
        ],
        "ingredients": [
            {
                "quantity": "2 pkgs",
                "name": "crescent rolls"
            },
            {
                "quantity": "2 cups",
                "name": "chicken",
                "notes": "cooked"
            },
            {
                "quantity": "4 oz",
                "name": "cream cheese"
            },
            {
                "quantity": "2-3 tsp",
                "name": "lemon pepper"
            },
            {
                "quantity": "7 oz",
                "name": "mushrooms"
            },
            {
                "quantity": "4 tsp",
                "name": "butter"
            },
            {
                "quantity": "1 cup",
                "name": "bread crumbs"
            },
            {
                "quantity": "2/3 cup",
                "name": "pecans",
                "notes": "chopped"
            }
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
        ],
        "note": ""
    },
    {
        "title": "Broccoli Salad",
        "prep_time": 15,
        "cook_time": 10,
        "rating": 8,
        "temperature": 0,
        "servings": 6,
        "categories": [
            "side dish"
        ],
        "ingredients": [
            {
                "quantity": "6 slices",
                "name": "bacon",
                "notes": "chopped"
            },
            {
                "quantity": "1 1/2 heads",
                "name": "broccoli",
                "notes": "cut into florets"
            },
            {
                "quantity": "1",
                "name": "onion",
                "notes": "chopped"
            },
            {
                "quantity": "1",
                "name": "apple",
                "notes": "chopped"
            },
            {
                "quantity": "1 cup",
                "name": "sunflower seeds"
            },
            {
                "quantity": "2/3 cup",
                "name": "raisins"
            },
            {
                "quantity": "1/2 cup",
                "name": "plain low-fat yogurt"
            },
            {
                "quantity": "1/4 cup",
                "name": "light mayonnaise"
            },
            {
                "quantity": "1/4 cup",
                "name": "lemon juice"
            },
            {
                "quantity": "1 tbsp",
                "name": "sugar"
            },
            {
                "quantity": "",
                "name": "pepper",
                "notes": "to taste"
            }
        ],
        "instructions": [
            "Fry the bacon in a skillet over medium heat until cooked. Drain on a paper towel and set aside.",
            "Clean and floret the broccoli.",
            "Mix the bacon, broccoli, onion, apple, sunflower seeds and raisins in a large salad bowl.",
            "To make the dressing, mix the mayonnaise, yogurt, lemon juice, sugar, and pepper in a small bowl.",
            "Toss the salad with the dressing."
        ],
        "note": ""
    },
    {
        "title": "Fettuccine Carbonara",
        "prep_time": 10,
        "cook_time": 15,
        "rating": 10,
        "temperature": 0,
        "servings": 4,
        "categories": [
            "italian"
        ],
        "ingredients": [
            {
                "quantity": "1 lb",
                "name": "fettuccine"
            },
            {
                "quantity": "6 slices",
                "name": "bacon",
                "notes": "chopped"
            },
            {
                "quantity": "1 tbsp",
                "name": "olive oil"
            },
            {
                "quantity": "1 tsp",
                "name": "garlic",
                "notes": "minced"
            },
            {
                "quantity": "4",
                "name": "eggs"
            },
            {
                "quantity": "1/4 cup",
                "name": "Parmesan cheese"
            },
            {
                "quantity": "2 tbsp",
                "name": "parsley",
                "notes": "chopped"
            },
            {
                "quantity": "",
                "name": "salt",
                "notes": "to taste"
            },
            {
                "quantity": "",
                "name": "pepper",
                "notes": "to taste"
            }
        ],
        "instructions": [
            "Cook the fettuccine al dente.",
            "In a large pot, sauté the bacon over medium heat until crispy, about 6 minutes. Drain on paper towels.",
            "Pour off all of the fat in the pan except for 1 tbsp and add 1 tbsp olive oil.",
            "Add the garlic and sauté for 1 minute.",
            "Beat the eggs. Add the bacon and pasta back to the pan. Toss with the eggs, whisking quickly until the eggs thicken and cook in the pasta.",
            "Add the Parmesan and salt and pepper to taste.",
            "Serve and garnish with parsley."
        ],
        "note": ""
    },
    {
        "title": "Meatballs (Meatloaf Style)",
        "prep_time": 30,
        "cook_time": 60,
        "rating": 9,
        "temperature": 0,
        "servings": 6,
        "categories": [
            "italian"
        ],
        "ingredients": [
            {
                "quantity": "2 lb",
                "name": "hamburger"
            },
            {
                "quantity": "1 lb",
                "name": "pork"
            },
            {
                "quantity": "2 cups",
                "name": "oatmeal"
            },
            {
                "quantity": "1",
                "name": "small onion",
                "notes": "chopped"
            },
            {
                "quantity": "1 can",
                "name": "evaporated milk"
            },
            {
                "quantity": "1/2 tsp",
                "name": "salt"
            },
            {
                "quantity": "1/2 tsp",
                "name": "garlic salt"
            },
            {
                "quantity": "1/2 tsp",
                "name": "chili powder"
            },
            {
                "quantity": "2",
                "name": "eggs"
            },
            {
                "quantity": "2 cups",
                "name": "ketchup"
            },
            {
                "quantity": "1 tbsp",
                "name": "liquid smoke"
            },
            {
                "quantity": "1/2 tsp",
                "name": "garlic salt"
            },
            {
                "quantity": "2 cups",
                "name": "brown sugar"
            },
            {
                "quantity": "1 cup",
                "name": "onions",
                "notes": "diced"
            }
        ],
        "instructions": [
            "Preheat oven to 350°F.",
            "Mix together hamburger, pork, oatmeal, chopped onion, evaporated milk, salt, garlic salt, chili powder, and eggs.",
            "Form into meatballs and place in a baking dish.",
            "In a saucepan, combine ketchup, liquid smoke, garlic salt, brown sugar, and diced onions. Cook to a boil.",
            "Pour sauce over meatballs.",
            "Bake uncovered at 350°F for 1 hour."
        ],
        "note": ""
    },
    {
        "title": "Buttermilk Pancakes",
        "prep_time": 15,
        "cook_time": 15,
        "rating": 9,
        "temperature": 0,
        "servings": 4,
        "categories": [
            "breakfast"
        ],
        "ingredients": [
            {
                "quantity": "3",
                "name": "eggs",
                "notes": "separated"
            },
            {
                "quantity": "1 2/3 cups",
                "name": "buttermilk"
            },
            {
                "quantity": "1 tsp",
                "name": "baking soda"
            },
            {
                "quantity": "1 1/2 cups",
                "name": "all-purpose flour",
                "notes": "sifted"
            },
            {
                "quantity": "1 tbsp",
                "name": "sugar"
            },
            {
                "quantity": "1 tsp",
                "name": "salt"
            },
            {
                "quantity": "1 tsp",
                "name": "vanilla"
            },
            {
                "quantity": "3 tbsp",
                "name": "butter",
                "notes": "melted"
            }
        ],
        "instructions": [
            "Separate the eggs.",
            "Beat egg whites until stiff; set aside.",
            "Beat egg yolks in a large bowl.",
            "Add buttermilk, baking soda, sifted flour, sugar, salt, vanilla, and melted butter to the egg yolks and mix well.",
            "Fold in the beaten egg whites gently.",
            "Let the batter sit for 10 minutes.",
            "Cook on a hot griddle or pan until bubbles form and the edges are dry."
        ],
        "note": ""
    },
    {
        "title": "Mashed Turnips and Potatoes",
        "prep_time": 10,
        "cook_time": 25,
        "rating": 6,
        "temperature": 0,
        "servings": 6,
        "categories": [
            "side dish"
        ],
        "ingredients": [
            {
                "quantity": "1 1/2 pounds",
                "name": "turnips",
                "notes": "peeled and diced"
            },
            {
                "quantity": "1 pound",
                "name": "Yukon Gold potatoes",
                "notes": "peeled and diced"
            },
            {
                "quantity": "5 tbsp",
                "name": "unsalted butter",
                "notes": "melted"
            },
            {
                "quantity": "1/2 cup",
                "name": "milk",
                "notes": "hot"
            },
            {
                "quantity": "1/2 tbsp",
                "name": "chopped fresh herbs",
                "notes": "finely chopped (thyme, rosemary, sage)"
            },
            {
                "quantity": "1/4 tsp",
                "name": "garlic powder"
            },
            {
                "quantity": "",
                "name": "salt",
                "notes": "to taste"
            },
            {
                "quantity": "",
                "name": "pepper",
                "notes": "to taste"
            }
        ],
        "instructions": [
            "In a medium sized pot, boil the diced turnips and diced potatoes until fork-tender. Drain well.",
            "Mash the drained vegetables to your desired consistency.",
            "Stir in the hot milk, melted butter and chopped herbs. Season with salt and pepper to your taste.",
            "Serve warm and enjoy."
        ],
        "note": ""
    },
    {
        "title": "Squash Soup",
        "prep_time": 15,
        "cook_time": 25,
        "rating": 3,
        "temperature": 0,
        "servings": 6,
        "categories": [
            "side dish"
        ],
        "ingredients": [
            {
                "quantity": "1",
                "name": "onion"
            },
            {
                "quantity": "1 stalk",
                "name": "celery"
            },
            {
                "quantity": "2 tsp",
                "name": "canola oil"
            },
            {
                "quantity": "1",
                "name": "butternut squash"
            },
            {
                "quantity": "2",
                "name": "apples"
            },
            {
                "quantity": "1",
                "name": "potato"
            },
            {
                "quantity": "4 cups",
                "name": "water"
            },
            {
                "quantity": "1 tsp",
                "name": "ginger"
            },
            {
                "quantity": "1/2 tsp",
                "name": "cinnamon"
            },
            {
                "quantity": "",
                "name": "pepper",
                "notes": "to taste"
            },
            {
                "quantity": "2 tsp",
                "name": "brown sugar"
            },
            {
                "quantity": "1 cup",
                "name": "yogurt",
                "notes": "plain low-fat"
            },
            {
                "quantity": "1 cup",
                "name": "pecans",
                "notes": "pieces"
            }
        ],
        "instructions": [
            "Chop the onion and celery. Sauté them in the oil in a large saucepan over medium heat until tender.",
            "Peel, core, seed and chop the butternut squash, apples and potato. Add to saucepan.",
            "Add water, cinnamon, ginger and pepper to the saucepan. Bring to a boil.",
            "Simmer for 12 minutes until the potato is tender. Remove from heat and blend until smooth in a blender.",
            "Return the soup to the saucepan. Add brown sugar and bring to a boil. Remove from heat.",
            "Top with yogurt and nuts."
        ],
        "note": ""
    },
    {
        "title": "Tomato Penne",
        "prep_time": 10,
        "cook_time": 15,
        "rating": 10,
        "temperature": 0,
        "servings": 6,
        "categories": [
            "italian"
        ],
        "ingredients": [
            {
                "quantity": "1 1/4 lbs",
                "name": "penne"
            },
            {
                "quantity": "1 tbsp",
                "name": "canola oil"
            },
            {
                "quantity": "2 tsp",
                "name": "garlic",
                "notes": "minced"
            },
            {
                "quantity": "28 oz",
                "name": "diced tomatoes",
                "notes": "canned"
            },
            {
                "quantity": "12",
                "name": "black olives",
                "notes": "pitted"
            },
            {
                "quantity": "1/2 cup",
                "name": "parsley",
                "notes": "chopped"
            },
            {
                "quantity": "1/4 cup",
                "name": "basil",
                "notes": "torn"
            },
            {
                "quantity": "1 tsp",
                "name": "thyme"
            },
            {
                "quantity": "6 oz",
                "name": "feta cheese"
            },
            {
                "quantity": "1/2 cup",
                "name": "parmesan",
                "notes": "grated"
            }
        ],
        "instructions": [
            "Cook the penne in boiling water al dente.",
            "In a large skillet, sauté the garlic in oil over medium heat for 2 minutes until soft.",
            "Add the tomatoes and cook for 4 minutes.",
            "Drain the cooked pasta. Set aside 1/3 of the pasta for Tuesday’s lunch.",
            "Add the remaining penne to the pan. Toss the penne with the olives, the parsley, and the basil.",
            "Sprinkle with thyme, feta, and Parmesan cheeses."
        ],
        "note": ""
    },
    {
        "title": "Chicken Fajitas",
        "prep_time": 10,
        "cook_time": 10,
        "rating": 0,
        "temperature": 0,
        "servings": 4,
        "categories": [
            "mexican"
        ],
        "ingredients": [
            {
                "quantity": "1 1/2 lbs",
                "name": "Chicken breasts",
                "notes": "cut into 1/4 inch strips"
            },
            {
                "quantity": "1",
                "name": "Red pepper",
                "notes": "sliced"
            },
            {
                "quantity": "1",
                "name": "Green pepper",
                "notes": "sliced"
            },
            {
                "quantity": "1/2",
                "name": "Red onion",
                "notes": "thinly sliced"
            },
            {
                "quantity": "1 tbsp",
                "name": "Canola oil"
            },
            {
                "quantity": "1 tsp",
                "name": "Chili powder"
            },
            {
                "quantity": "1 tsp",
                "name": "Coriander"
            },
            {
                "quantity": "1 tsp",
                "name": "Cumin"
            },
            {
                "quantity": "1 tsp",
                "name": "Oregano"
            },
            {
                "quantity": "to taste",
                "name": "Pepper"
            },
            {
                "quantity": "1 tsp",
                "name": "Garlic"
            },
            {
                "quantity": "2 tsp",
                "name": "Lemon juice"
            },
            {
                "quantity": "dash",
                "name": "Hot sauce"
            },
            {
                "quantity": "dash",
                "name": "Worcestershire sauce"
            }
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
        "temperature": 0,
        "servings": 4,
        "categories": [
            "italian"
        ],
        "ingredients": [
            {
                "quantity": "1 lb",
                "name": "Whole grain fusilli"
            },
            {
                "quantity": "3 cups",
                "name": "Green beans",
                "notes": "cut into bite-sized pieces"
            },
            {
                "quantity": "1/2 head",
                "name": "Broccoli",
                "notes": "cut into bite-sized pieces"
            },
            {
                "quantity": "1",
                "name": "Red pepper",
                "notes": "julienned"
            },
            {
                "quantity": "1/3 cup",
                "name": "Olive oil"
            },
            {
                "quantity": "1/4 cup",
                "name": "Red wine vinegar"
            },
            {
                "quantity": "2 tsp",
                "name": "Lemon juice"
            },
            {
                "quantity": "2 tbsp",
                "name": "Oregano"
            },
            {
                "quantity": "2 tbsp",
                "name": "Parsley",
                "notes": "chopped fresh"
            },
            {
                "quantity": "8 oz",
                "name": "Feta cheese",
                "notes": "crumbled"
            },
            {
                "quantity": "12",
                "name": "Black olives",
                "notes": "pitted"
            },
            {
                "quantity": "4",
                "name": "Tomatoes",
                "notes": "quartered"
            }
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
        "temperature": 0,
        "servings": 4,
        "categories": [
            "main dish"
        ],
        "ingredients": [
            {
                "quantity": "1 lb",
                "name": "Chicken breasts",
                "notes": "skinned, deboned, sliced into 1-inch strips"
            },
            {
                "quantity": "1/2 cup",
                "name": "Flour"
            },
            {
                "quantity": "2",
                "name": "Eggs",
                "notes": "beaten"
            },
            {
                "quantity": "1 cup",
                "name": "Breadcrumbs"
            },
            {
                "quantity": "2/3 cup",
                "name": "Parmesan cheese",
                "notes": "grated"
            },
            {
                "quantity": "1 tbsp",
                "name": "Oregano"
            },
            {
                "quantity": "1 tbsp",
                "name": "Paprika"
            },
            {
                "quantity": "1 tbsp",
                "name": "Basil"
            }
        ],
        "instructions": [
            "Preheat oven to 450°F.",
            "Set up 3 wide-mouthed bowls: one with flour, one with beaten eggs, and one with a mixture of breadcrumbs, Parmesan cheese, oregano, paprika, and basil.",
            "Dip each chicken strip into the flour, then into the egg, and finally into the breadcrumb mixture to coat.",
            "Lay the coated chicken strips on a slightly greased baking sheet.",
            "Bake for 6 minutes on each side, until crisp and cooked through."
        ],
        "note": ""
    },
    {
        "title": "Pumpkin Chocolate Chip Muffins",
        "prep_time": 10,
        "cook_time": 20,
        "rating": 0,
        "temperature": 350,
        "servings": 12,
        "categories": [
            "breakfast"
        ],
        "ingredients": [
            {
                "quantity": "1 cup",
                "name": "Flour"
            },
            {
                "quantity": "2/3 cup",
                "name": "Sugar"
            },
            {
                "quantity": "1/4 tsp",
                "name": "Salt"
            },
            {
                "quantity": "3/4 tsp",
                "name": "Baking Powder"
            },
            {
                "quantity": "3/4 tsp",
                "name": "Baking Soda"
            },
            {
                "quantity": "1/4 tsp",
                "name": "Cinnamon"
            },
            {
                "quantity": "2",
                "name": "Large eggs"
            },
            {
                "quantity": "1/2 cup",
                "name": "Oil"
            },
            {
                "quantity": "2/3 cup",
                "name": "Pumpkin"
            },
            {
                "quantity": "2/3 cup",
                "name": "Chocolate Chips"
            }
        ],
        "instructions": [
            "In a mixing bowl, combine all dry ingredients.",
            "In a separate bowl, combine all wet ingredients.",
            "Combine dry and wet ingredients together.",
            "Once mixed, fold in chocolate chips.",
            "Portion muffin batter into muffin tins (about 1/4 cup per muffin).",
            "Bake at 350°F for 18–20 minutes."
        ],
        "note": ""
    },
    {
        "title": "Shepherd's Pie",
        "prep_time": 20,
        "cook_time": 25,
        "rating": 0,
        "temperature": 0,
        "servings": 4,
        "categories": [
            "main dish"
        ],
        "ingredients": [
            {
                "quantity": "5 large",
                "name": "Yellow potatoes"
            },
            {
                "quantity": "1/4 cup",
                "name": "Milk"
            },
            {
                "quantity": "1 tsp",
                "name": "Garlic",
                "notes": "minced"
            },
            {
                "quantity": "1",
                "name": "Onion",
                "notes": "finely chopped"
            },
            {
                "quantity": "1 lb",
                "name": "Ground beef"
            },
            {
                "quantity": "1 can (14 oz)",
                "name": "Cream Style Corn"
            },
            {
                "quantity": "1 cup",
                "name": "Frozen corn niblets"
            },
            {
                "quantity": "to taste",
                "name": "Worcestershire sauce"
            },
            {
                "quantity": "to taste",
                "name": "Hot sauce"
            },
            {
                "quantity": "to taste",
                "name": "Pepper"
            },
            {
                "quantity": "1 tsp",
                "name": "Paprika"
            }
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
        "rating": 0,
        "temperature": 350,
        "servings": 8,
        "categories": [
            "dessert"
        ],
        "ingredients": [
            {
                "quantity": "21 oz",
                "name": "Fruit Filling"
            },
            {
                "quantity": "1 pkg",
                "name": "Yellow Cake Mix"
            },
            {
                "quantity": "1/2 cup",
                "name": "Butter"
            }
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
        "categories": [
            "dessert"
        ],
        "ingredients": [
            {
                "quantity": "3/4 cup",
                "name": "Flour"
            },
            {
                "quantity": "1/2 tsp",
                "name": "Salt"
            },
            {
                "quantity": "1 tsp",
                "name": "Baking soda"
            },
            {
                "quantity": "1 tsp",
                "name": "Ground cinnamon"
            },
            {
                "quantity": "1 tsp",
                "name": "Pumpkin pie spice"
            },
            {
                "quantity": "1 cup",
                "name": "Granulated sugar"
            },
            {
                "quantity": "3",
                "name": "eggs",
                "notes": "large"
            },
            {
                "quantity": "2/3 cup",
                "name": "Canned pumpkin"
            },
            {
                "quantity": "1 tsp",
                "name": "Vanilla extract"
            },
            {
                "quantity": "8 oz",
                "name": "Cream cheese",
                "notes": "softened"
            },
            {
                "quantity": "2 tbsp",
                "name": "Butter",
                "notes": "softened"
            },
            {
                "quantity": "1 tsp",
                "name": "Vanilla extract"
            },
            {
                "quantity": "1 cup",
                "name": "Powdered sugar",
                "notes": "plus more for dusting"
            }
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
        ],
        "note": ""
    },
    {
        "title": "Roasted Zucchini",
        "prep_time": 5,
        "cook_time": 10,
        "rating": 7,
        "temperature": 450,
        "servings": 4,
        "categories": [
            "side dish"
        ],
        "ingredients": [
            {
                "quantity": "2 medium",
                "name": "Zucchini",
                "notes": "cut into 1/2 inch thick rounds"
            },
            {
                "quantity": "2 tbsp",
                "name": "olive oil",
                "notes": "extra-virgin"
            },
            {
                "quantity": "1/2 tsp",
                "name": "salt"
            },
            {
                "quantity": "1/2 tsp",
                "name": "black pepper"
            },
            {
                "quantity": "1 tsp",
                "name": "garlic powder"
            },
            {
                "quantity": "1/2 cup",
                "name": "Parmesan cheese",
                "notes": "grated"
            }
        ],
        "instructions": [
            "Preheat oven to 450°F and position a rack in the center.",
            "In a large bowl, toss zucchini with olive oil, salt, pepper, and garlic powder until evenly coated.",
            "Arrange zucchini rounds on a rimmed sheet pan in a single layer.",
            "Sprinkle evenly with Parmesan cheese.",
            "Bake for 5 minutes, then switch the oven to broil on High.",
            "Continue baking for 2-3 minutes, or until the cheese is golden brown and zucchini is tender.",
            "Serve immediately, adding extra salt to taste if desired."
        ],
        "note": ""
    },
    {
        "title": "Meatballs (oven-baked)",
        "prep_time": 15,
        "cook_time": 20,
        "rating": 10,
        "temperature": 400,
        "servings": 5,
        "categories": [
            "main dish"
        ],
        "ingredients": [
            {
                "quantity": "1 lb",
                "name": "Ground beef",
                "notes": "80% lean (or half pork)"
            },
            {
                "quantity": "1",
                "name": "Large egg",
                "notes": "beaten"
            },
            {
                "quantity": "1/4 cup",
                "name": "Breadcrumbs"
            },
            {
                "quantity": "1/4 cup",
                "name": "Parmesan cheese",
                "notes": "grated"
            },
            {
                "quantity": "1/4 cup",
                "name": "onion",
                "notes": "finely chopped"
            },
            {
                "quantity": "2 tsp",
                "name": "garlic",
                "notes": "minced"
            },
            {
                "quantity": "3/4 tsp",
                "name": "salt"
            },
            {
                "quantity": "1/4 tsp",
                "name": "pepper"
            },
            {
                "quantity": "2 tbsp",
                "name": "parsley",
                "notes": "optional"
            },
            {
                "quantity": "2 cups",
                "name": "Marinara sauce",
                "notes": "optional, for serving"
            }
        ],
        "instructions": [
            "Preheat oven to 400°F. Line a baking sheet with foil and spray with non-stick cooking spray.",
            "In a large bowl, combine ground beef, egg, breadcrumbs, Parmesan cheese, onion, garlic, salt, pepper, and parsley (if using). Mix until just combined.",
            "Use a medium cookie scoop or spoon to form 1 1/2-inch meatballs. Place them evenly on the prepared baking sheet.",
            "Bake uncovered for 17-20 minutes, turning halfway through, until the meatballs are browned and no longer pink inside.",
            "Serve with marinara sauce, noodles, and additional Parmesan, basil, or parsley if desired."
        ],
        "note": ""
    },
    {
        "title": "Brownies",
        "prep_time": 5,
        "cook_time": 45,
        "rating": 9,
        "temperature": 325,
        "servings": 16,
        "categories": [
            "dessert"
        ],
        "ingredients": [
            {
                "quantity": "1 1/2 cups",
                "name": "Granulated sugar"
            },
            {
                "quantity": "3/4 cup",
                "name": "All-purpose flour"
            },
            {
                "quantity": "2/3 cup",
                "name": "Cocoa powder",
                "notes": "sifted if lumpy"
            },
            {
                "quantity": "1/2 cup",
                "name": "Powdered sugar",
                "notes": "sifted if lumpy"
            },
            {
                "quantity": "1/2 cup",
                "name": "Dark chocolate chips"
            },
            {
                "quantity": "3/4 tsp",
                "name": "Sea salt"
            },
            {
                "quantity": "2",
                "name": "Large eggs"
            },
            {
                "quantity": "1/2 cup",
                "name": "Canola oil or extra-virgin olive oil"
            },
            {
                "quantity": "2 tbsp",
                "name": "Water"
            },
            {
                "quantity": "1/2 tsp",
                "name": "Vanilla extract"
            }
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
        ],
        "note": ""
    },
    {
        "title": "Blueberry Baked Oatmeal",
        "prep_time": 10,
        "cook_time": 45,
        "rating": 9,
        "temperature": 375,
        "servings": 8,
        "categories": [
            "breakfast"
        ],
        "ingredients": [
            {
                "quantity": "2/3 cup",
                "name": "Pecans",
                "notes": "roughly chopped"
            },
            {
                "quantity": "2 cups",
                "name": "oats",
                "notes": "old-fashioned"
            },
            {
                "quantity": "2 tsp",
                "name": "Cinnamon"
            },
            {
                "quantity": "1 tsp",
                "name": "Baking powder"
            },
            {
                "quantity": "3/4 tsp",
                "name": "salt"
            },
            {
                "quantity": "1/4 tsp",
                "name": "Nutmeg"
            },
            {
                "quantity": "1 3/4 cups",
                "name": "Milk"
            },
            {
                "quantity": "1/3 cup",
                "name": "Maple syrup",
                "notes": "or honey"
            },
            {
                "quantity": "2",
                "name": "Large eggs"
            },
            {
                "quantity": "3 tbsp",
                "name": "Unsalted butter",
                "notes": "or coconut oil, melted"
            },
            {
                "quantity": "2 tsp",
                "name": "Vanilla extract"
            },
            {
                "quantity": "12 oz",
                "name": "Blueberries"
            },
            {
                "quantity": "2 tsp",
                "name": "Raw sugar",
                "notes": "optional for topping"
            },
            {
                "quantity": "",
                "name": "Yogurt or whipped cream",
                "notes": "optional for serving"
            },
            {
                "quantity": "",
                "name": "Maple syrup or honey",
                "notes": "optional for drizzling"
            },
            {
                "quantity": "",
                "name": "Fresh fruit",
                "notes": "optional for serving"
            }
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
        "categories": [
            "dessert"
        ],
        "ingredients": [
            {
                "quantity": "1 cup",
                "name": "Salted butter",
                "notes": "softened"
            },
            {
                "quantity": "1 cup",
                "name": "Granulated sugar"
            },
            {
                "quantity": "1 cup",
                "name": "Light brown sugar",
                "notes": "packed"
            },
            {
                "quantity": "2 tsp",
                "name": "Vanilla extract",
                "notes": "pure"
            },
            {
                "quantity": "2",
                "name": "Large eggs"
            },
            {
                "quantity": "3 cups",
                "name": "All-purpose flour"
            },
            {
                "quantity": "1 tsp",
                "name": "Baking soda"
            },
            {
                "quantity": "1/2 tsp",
                "name": "Baking powder"
            },
            {
                "quantity": "1 tsp",
                "name": "Sea salt"
            },
            {
                "quantity": "2 cups",
                "name": "Chocolate chips",
                "notes": "about 12 oz"
            }
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
        "categories": [
            "main dish"
        ],
        "ingredients": [
            {
                "quantity": "4",
                "name": "Boneless pork chops",
                "notes": "thick-cut"
            },
            {
                "quantity": "",
                "name": "Salt and pepper",
                "notes": "to taste"
            },
            {
                "quantity": "1 tsp",
                "name": "Garlic powder"
            },
            {
                "quantity": "1 tsp",
                "name": "Italian herb seasoning",
                "notes": "or Herbs de Provence"
            },
            {
                "quantity": "1/2 tsp",
                "name": "Smoked paprika"
            },
            {
                "quantity": "2 tsp",
                "name": "Dry ranch seasoning"
            },
            {
                "quantity": "3 cups",
                "name": "Broccoli florets"
            },
            {
                "quantity": "3 tbsp",
                "name": "Olive oil",
                "notes": "1 tbsp for broccoli, 2 tbsp for potatoes"
            },
            {
                "quantity": "1 lb",
                "name": "Baby gold or red potatoes",
                "notes": "cut in half"
            },
            {
                "quantity": "2 tsp",
                "name": "Garlic powder",
                "notes": "for potatoes"
            },
            {
                "quantity": "1/3 cup",
                "name": "Parmesan cheese",
                "notes": "grated, for potatoes"
            }
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
        "temperature": 0,
        "servings": 4,
        "categories": [
            "main dish"
        ],
        "ingredients": [
            {
                "quantity": "2 tbsp",
                "name": "Butter",
                "notes": "for sautéing"
            },
            {
                "quantity": "4 tbsp",
                "name": "Minced onion"
            },
            {
                "quantity": "1 cup",
                "name": "Whole button mushrooms"
            },
            {
                "quantity": "1 1/2 cups",
                "name": "Shredded cooked chicken"
            },
            {
                "quantity": "1 cup",
                "name": "Diced celery"
            },
            {
                "quantity": "1 1/2 cups",
                "name": "Meat stock or water"
            },
            {
                "quantity": "2 tbsp",
                "name": "Soy sauce"
            },
            {
                "quantity": "1 tbsp",
                "name": "Sugar"
            },
            {
                "quantity": "1 1/2 tbsp",
                "name": "Cornstarch"
            },
            {
                "quantity": "3 tbsp",
                "name": "Cold water"
            },
            {
                "quantity": "",
                "name": "Hot chow mein noodles",
                "notes": "for serving"
            }
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
        "categories": [
            "main dish"
        ],
        "ingredients": [
            {
                "quantity": "1/4 cup",
                "name": "Mayonnaise"
            },
            {
                "quantity": "1",
                "name": "Egg"
            },
            {
                "quantity": "1 tbsp",
                "name": "Seasoning blend"
            },
            {
                "quantity": "4",
                "name": "Chicken cutlets",
                "notes": "about 1 lb"
            },
            {
                "quantity": "",
                "name": "Panko breadcrumbs",
                "notes": "for coating"
            },
            {
                "quantity": "",
                "name": "Marinara sauce",
                "notes": "for topping"
            },
            {
                "quantity": "",
                "name": "Mozzarella cheese",
                "notes": "shredded, for topping"
            }
        ],
        "instructions": [
            "Preheat oven to 450°F and line a sheet pan with a rack.",
            "In a large bowl, mix mayonnaise, egg, and seasoning.",
            "Add chicken cutlets and toss to coat.",
            "Coat each cutlet in panko breadcrumbs and place on sheet pan.",
            "Bake for 20 minutes.",
            "Top cutlets with marinara and shredded mozzarella.",
            "Bake an additional 5-7 minutes, until cheese is melted and lightly browned."
        ],
        "note": ""
    },
    {
        "title": "Corn Pudding",
        "prep_time": 15,
        "cook_time": 60,
        "rating": 8,
        "temperature": 325,
        "servings": 6,
        "categories": [
            "side dish"
        ],
        "ingredients": [
            {
                "quantity": "1 can",
                "name": "whole kernel corn"
            },
            {
                "quantity": "1 can",
                "name": "cream style corn"
            },
            {
                "quantity": "1 can",
                "name": "evaporated milk"
            },
            {
                "quantity": "2 large or 3 small",
                "name": "eggs"
            },
            {
                "quantity": "3/4 cup",
                "name": "sugar"
            },
            {
                "quantity": "2 tsp",
                "name": "cornstarch"
            },
            {
                "quantity": "2 tsp",
                "name": "butter"
            }
        ],
        "instructions": [
            "Combine the whole kernel corn, cream style corn, evaporated milk, eggs, sugar, and cornstarch in a bowl and mix well until smooth.",
            "Pour the mixture into a buttered casserole dish.",
            "Dot the top of the mixture with 2 tsp of butter.",
            "Bake at 325°F for 1 hour or until firm."
        ],
        "note": "Best served warm."
    },
    {
        "title": "One-Pot Enchilada",
        "prep_time": 5,
        "cook_time": 20,
        "rating": 9,
        "servings": 8,
        "categories": [
            "mexican",
            "main dish"
        ],
        "ingredients": [
            {
                "quantity": "1 lb",
                "name": "ground beef"
            },
            {
                "quantity": "1/2 cup",
                "name": "salsa"
            },
            {
                "quantity": "1/4 cup",
                "name": "water"
            },
            {
                "quantity": "10oz can",
                "name": "enchilada sauce"
            }
        ],
        "instructions": [
            "Begin cooking rice to serve with enchilada.",
            "Brown ground beef in pot over medium heat.",
            "Drain the grease, and add salsa, enchilada sauce, water.",
            "Cook until sauce has thickened (about the same time as rice is done)."
        ],
        "note": ""
    }
];
