using Microsoft.EntityFrameworkCore.Migrations;

namespace SchedulerAPI.Migrations
{
    public partial class NewOne : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Sessions",
                keyColumn: "SessionId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Sessions",
                keyColumn: "SessionId",
                keyValue: 2);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Sessions",
                columns: new[] { "SessionId", "Date", "Description", "LessonAdded", "Location", "Name", "Openings", "Selected", "VolunteerId" },
                values: new object[] { 1, "Jan.", "This is a description.", null, "PDX", "First Test Project", "7", null, 1 });

            migrationBuilder.InsertData(
                table: "Sessions",
                columns: new[] { "SessionId", "Date", "Description", "LessonAdded", "Location", "Name", "Openings", "Selected", "VolunteerId" },
                values: new object[] { 2, "Jan.", "This is a description.", null, "PDX", "First Test Project", "7", null, 1 });
        }
    }
}
