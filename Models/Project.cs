using System;
using System.Collections.Generic;

namespace stackflow.Models
{
  public class Project
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string ImageUrl { get; set; }
    public string Theme { get; set; }
    public string Designer { get; set; }
    public int PieceCount { get; set; } = 0;
    public string VideoUrl { get; set; }
    public string BluePrintUrl { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public int ViewCount { get; set; } = 0;
    public int VoteCount { get; set; } = 0;
    public int? QuestionTableId { get; set; }
    public Question QuestionTable { get; set; }

  }
}