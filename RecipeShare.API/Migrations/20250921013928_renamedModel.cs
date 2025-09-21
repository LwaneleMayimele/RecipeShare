using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RecipeShare.API.Migrations
{
    /// <inheritdoc />
    public partial class renamedModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Recipe",
                table: "Recipe");

            migrationBuilder.RenameTable(
                name: "Recipe",
                newName: "Recipes");

            migrationBuilder.RenameColumn(
                name: "DietaryTag",
                table: "Recipes",
                newName: "DietaryTags");

            migrationBuilder.RenameColumn(
                name: "CookinTime",
                table: "Recipes",
                newName: "CookingTime");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Recipes",
                table: "Recipes",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Recipes",
                table: "Recipes");

            migrationBuilder.RenameTable(
                name: "Recipes",
                newName: "Recipe");

            migrationBuilder.RenameColumn(
                name: "DietaryTags",
                table: "Recipe",
                newName: "DietaryTag");

            migrationBuilder.RenameColumn(
                name: "CookingTime",
                table: "Recipe",
                newName: "CookinTime");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Recipe",
                table: "Recipe",
                column: "Id");
        }
    }
}
