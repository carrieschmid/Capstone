using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SchedulerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace SchedulerAPI.Controllers
{
    // [Authorize]
   
    [ApiController]
    [Route("api")]
    public class SessionController : ControllerBase
    {
        // private IUserService _userService;
        private SchedulerAPIContext _db;

        public SessionController(
            // IUserService userService,
             SchedulerAPIContext db)
        {
            // _userService = userService;
            _db = db;
        }

        [HttpGet]
        public ActionResult<List<Session>> GetAll(int id)
        {
            
            var sessions = _db.Sessions.Where(p=>p.VolunteerId == id).Include(l=>l.Lessons);
            return sessions.ToList();
        }

        [HttpPost]
        public void Post([FromBody] Session session)
        {
            _db.Sessions.Add(session);
            _db.SaveChanges();
        }
    }
}



// [Authorize]
// [HttpPost]
// public void Post([FromBody] Session newSession)
// {
//     var identity = (ClaimsIdentity)User.Identity;
//     var foundId = identity.FindFirst(ClaimTypes.Name).Value;
//     newSession.UserId = Convert.ToInt32(foundId);
//     _db.Sessions.Add(newSession);
//     _db.SaveChanges();
// }

//         [HttpGet("{sessionId}")]  
//         public ActionResult<Session> GetSpecificSession(int sessionId)
//         {   
//         Session foundSession = _db.Sessions.Include(q => q.Lessons).FirstOrDefault(q => q.SessionId == sessionId);
//         return foundSession;
//         }

//     }
// }    