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

  public class ProjectController
  {

    [HttpPost("add")]
    public ActionResult<Project> PostProject([FromBody]Project myproject)
    {
      var db = new DatabaseContext();
      db.ProjectTable.Add(myproject);
      db.SaveChanges();
      return myproject;
    }

    [HttpGet("all")]

    public ActionResult<List<Project>> GetAll()
    {
      var db = new DatabaseContext();
      var rt = db.ProjectTable;
      return rt.ToList();
    }

  }
}