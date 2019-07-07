using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using stackflow;
using stackflow.Models;
using Microsoft.EntityFrameworkCore;

namespace stackflow.Controllers
{
  [ApiController]
  [Route("/[controller]")]

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

    [HttpGet("{projectid}")]
    public ActionResult<Project> GetProject([FromRoute] int projectid)
    {
      var db = new DatabaseContext();
      var one = db.ProjectTable.FirstOrDefault(f => f.Id == projectid);
      return one;
    }




    [HttpGet("all")]

    public ActionResult<List<Project>> GetAll()
    {
      var db = new DatabaseContext();
      var rt = db.ProjectTable;
      return rt.ToList();
    }


    [HttpDelete("delete/{id}")]
    public ActionResult<Project> DeleteOne([FromRoute] int id)
    {
      var db = new DatabaseContext();
      var location = db.ProjectTable.SingleOrDefault(s => s.Id == id);
      db.Remove(location);
      db.SaveChanges();
      return location;
    }

    [HttpDelete("deleteall")]
    public ActionResult<List<Project>> DeleteAll()
    {
      var db = new DatabaseContext();
      var all = db.ProjectTable.ToList();
      db.RemoveRange(all);
      db.SaveChanges();
      return all;
    }

  }
}