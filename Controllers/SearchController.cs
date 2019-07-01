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

  public class SearchController : ControllerBase
  {


    [HttpGet]
    public ActionResult<List<Question>> Search([FromQuery] string searchitem)
    {
      var db = new DatabaseContext();
      var data = db.QuestionTable.Where(w => w.Title.ToLower().Contains(searchitem.ToLower()));
      return data.ToList();
    }

    [HttpGet("all")]
    public ActionResult<List<Question>> AllQuestions()
    {
      var db = new DatabaseContext();
      var data = db.QuestionTable;
      return data.ToList();
    }



    [HttpGet("alltitles")]
    public ActionResult<List<string>> AllQuestionTitles()
    {
      var db = new DatabaseContext();
      var data = db.QuestionTable.Select(w => w.Title);
      return data.ToList();
    }



  }



}