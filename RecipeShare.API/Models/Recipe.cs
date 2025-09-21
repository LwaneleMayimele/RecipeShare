using System.ComponentModel.DataAnnotations;

namespace RecipeShare.API.Models
{
    public class Recipe
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        public string Ingredients { get; set; } 

        public string Steps { get; set; }
        
        public int CookingTime { get; set; }

        public string DietaryTags { get; set; }

    }
}
