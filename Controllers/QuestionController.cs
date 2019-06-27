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

  public class QuestionController : ControllerBase
  {

    [HttpPost]
    public ActionResult<Question> Post([FromBody]Question myquestion)
    {
      var db = new DatabaseContext();
      db.QuestionTable.Add(myquestion);
      db.SaveChanges();
      return myquestion;
    }

    [HttpGet("all")]
    public ActionResult<List<Question>> GetAll()
    {
      var db = new DatabaseContext();
      var data = db.QuestionTable;
      return data.ToList();
    }
    //  [HttpGet("all")]
    // public ActionResult<List<LocationTableStructure>Answer()
    // {
    //   var db = new DatabaseContext();
    //   var data = db.LocationTableName;
    //   return data.ToList();
    // }
  }

}