namespace RecipeShare.API.Models
{
    public static class DbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            context.Database.EnsureCreated();

            // Look for any recipes.
            if (context.Recipes.Any())
            {
                return;   // DB has been seeded
            }

            var recipes = new Recipe[]
            {
            new Recipe{
                Title="Spaghetti Carbonara",
                Ingredients="[200g spaghetti, 100g pancetta, 2 eggs, 50g pecorino cheese]",
                Steps="[Boil pasta, Fry pancetta, Mix eggs and cheese, Combine everything]",
                CookingTime=20,
                DietaryTags="Meat"
            },
            new Recipe{
                Title="Vegetable Stir Fry",
                Ingredients="[1 bell pepper, 1 carrot, 100g broccoli, 2 tbsp soy sauce]",
                Steps="[Chop vegetables, Heat oil in wok, Stir fry for 5 mins, Add soy sauce]",
                CookingTime=15,
                DietaryTags="Vegetarian"
            },
            new Recipe{Title="Chocolate Chip Cookies",
                Ingredients="[200g flour, 150g butter, 100g chocolate chips, 150g sugar]",
                Steps="[Cream butter and sugar, Add flour, Mix in chocolate chips, Bake at 180C for 12 mins]",
                CookingTime=30,
                DietaryTags="Vegetarian,Desert"
            }
            };

            foreach (Recipe r in recipes)
            {
                context.Recipes.Add(r);
            }
            context.SaveChanges();
        }
    }
}
