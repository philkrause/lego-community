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
    // private readonly DatabaseContext _context;
    // public MemberController(DatabaseContext context)
    // {
    //   _context = context;
    // }

    [HttpPost()]
    public ActionResult<Question> Post([FromBody]Question myquestion)
    {
      var db = new DatabaseContext();
      db.QuestionTable.Add(myquestion);
      db.SaveChanges();
      return myquestion;
    }

    [HttpDelete("delete/{id}")]
    public ActionResult<Question> Delete(int id)
    {

      var db = new DatabaseContext();
      var quest = db.QuestionTable.SingleOrDefault(s => s.Id == id);
      if (quest == null)
      {
        return NotFound();
      }
      else
      {
        db.Remove(quest);
        db.SaveChanges();
        return quest;
      }

    }

    [HttpGet("all")]
    public ActionResult<List<Question>> GetAll()
    {
      var db = new DatabaseContext();
      var data = db.QuestionTable;
      return data.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<Question> GetOne(int id)
    {
      var db = new DatabaseContext();
      var data = db.QuestionTable.FirstOrDefault(f => f.Id == id);
      return data;
    }


  }



}