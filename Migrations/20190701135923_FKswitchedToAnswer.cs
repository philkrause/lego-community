using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class FKswitchedToAnswer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "QuestionTableId",
                table: "AnswerTable",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AnswerTable_QuestionTableId",
                table: "AnswerTable",
                column: "QuestionTableId");

            migrationBuilder.AddForeignKey(
                name: "FK_AnswerTable_QuestionTable_QuestionTableId",
                table: "AnswerTable",
                column: "QuestionTableId",
                principalTable: "QuestionTable",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AnswerTable_QuestionTable_QuestionTableId",
                table: "AnswerTable");

            migrationBuilder.DropIndex(
                name: "IX_AnswerTable_QuestionTableId",
                table: "AnswerTable");

            migrationBuilder.DropColumn(
                name: "QuestionTableId",
                table: "AnswerTable");

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
    }
}
