using System;
using System.Collections.Generic;

namespace stackflow.Models
{
  public class Answer
  {
    public int Id { get; set; }

    public string Description { get; set; }
    public int VoteCount { get; set; } = 0;

    public List<Question> QuestionTable { get; set; } = new List<Question>();

  }
}