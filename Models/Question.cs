using System;
using System.Collections.Generic;

namespace stackflow.Models
{
  public class Question
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }

    public int VoteCount { get; set; } = 0;

    public int ViewCount { get; set; } = 0;

    public List<Answer> AnswerTable { get; set; } = new List<Answer>();

  }
}