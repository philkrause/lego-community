using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class AddedFKs : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AnswerTableId",
                table: "QuestionTable",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_QuestionTable_AnswerTableId",
                table: "QuestionTable",
                column: "AnswerTableId");

            migrationBuilder.AddForeignKey(
                name: "FK_QuestionTable_AnswerTable_AnswerTableId",
                table: "QuestionTable",
                column: "AnswerTableId",
                principalTable: "AnswerTable",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_QuestionTable_AnswerTable_AnswerTableId",
                table: "QuestionTable");

            migrationBuilder.DropIndex(
                name: "IX_QuestionTable_AnswerTableId",
                table: "QuestionTable");

            migrationBuilder.DropColumn(
                name: "AnswerTableId",
                table: "QuestionTable");
        }
    }
}
