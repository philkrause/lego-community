using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using stackflow;
using stackflow.Models;
using Microsoft.EntityFrameworkCore;


namespace stackflow.Controllers
{

  [ApiController]
  [Route("api/[controller]")]

  public class AnswerController : ControllerBase
  {

    [HttpPost("{id}")]
    public ActionResult<Answer> Post([FromRoute]int id, [FromBody]Answer myanswer)
    {
      var db = new DatabaseContext();
      myanswer.QuestionTableId = id;
      db.AnswerTable.Add(myanswer);
      db.SaveChanges();
      return myanswer;
    }

    [HttpGet("{id}")]
    public ActionResult<List<Answer>> Get([FromRoute]int id)
    {
      var db = new DatabaseContext();
      var rt = db.AnswerTable.Where(w => w.QuestionTableId == id);
      return rt.ToList();
    }


    [HttpGet("{questionId}/count")]
    public ActionResult<int> GetQuestionViewCount([FromRoute]int questionId)
    {
      var db = new DatabaseContext();
      var location = db.QuestionTable.FirstOrDefault(w => w.Id == questionId);
      var rt = location.ViewCount;
      return rt;
    }

    [HttpPatch("{id}/addview")]
    public ActionResult<int> UpdateViewCount([FromRoute]int id)
    {
      var db = new DatabaseContext();
      var location = db.QuestionTable.FirstOrDefault(w => w.Id == id);
      location.ViewCount += 1;
      db.SaveChanges();
      return Ok();
    }



    // All answers with the question
    [HttpGet("all")]
    public ActionResult<List<Answer>> Get()
    {
      var db = new DatabaseContext();
      var rv = db.AnswerTable.Include(i => i.QuestionTable);
      return rv.ToList();
    }

    //  var answerId = 0;
    //     var question = db
    //           .AnswerTable
    //           .Include(i => i.QuestionTable)
    //           .FirstOrDefault(f => f.Id == answerId)
    //           .Select(s => s.QuestionTable);

  }


}