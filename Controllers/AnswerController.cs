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

    [HttpPost("question/{questionId}")]
    public ActionResult<Answer> Post([FromRoute]int questionId, [FromBody]Answer myanswer)
    {
      var db = new DatabaseContext();
      myanswer.QuestionTableId = questionId;
      db.AnswerTable.Add(myanswer);
      db.SaveChanges();
      return myanswer;
    }

    [HttpGet("question/{questionId}")]
    public ActionResult<List<Answer>> Get([FromRoute]int questionId)
    {
      var db = new DatabaseContext();
      var rv = db.AnswerTable.Where(w => w.QuestionTableId == questionId);
      return rv.ToList();
    }

  }

}