using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace sdgreacttemplate.Migrations
{
    public partial class addingProjectTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProjectTable",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Title = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true),
                    Theme = table.Column<string>(nullable: true),
                    Designer = table.Column<string>(nullable: true),
                    PieceCount = table.Column<int>(nullable: false),
                    Dimensions = table.Column<string>(nullable: true),
                    BluePrintUrl = table.Column<string>(nullable: true),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    ViewCount = table.Column<int>(nullable: false),
                    VoteCount = table.Column<int>(nullable: false),
                    QuestionTableId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectTable", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProjectTable_QuestionTable_QuestionTableId",
                        column: x => x.QuestionTableId,
                        principalTable: "QuestionTable",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ProjectTable_QuestionTableId",
                table: "ProjectTable",
                column: "QuestionTableId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProjectTable");
        }
    }
}
