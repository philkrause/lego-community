// using System.Collections.Generic;
// using System.Linq;
// using Microsoft.AspNetCore.Mvc;
// using stackflow;
// using stackflow.Models;
// using Microsoft.EntityFrameworkCore;


// namespace stackflow.Controllers
// {

//   [ApiController]
//   [Route("api/[controller]")]

//   public class AnswerController : ControllerBase
//   {

//     [HttpPost("")]
//     public ActionResult<Answer> Post([FromBody]Answer myanswer)
//     {
//       var db = new DatabaseContext();
//       db.LocationTableName.Add(myLocation);
//       db.SaveChanges();
//       return myLocation;
//     }

//   }

// }