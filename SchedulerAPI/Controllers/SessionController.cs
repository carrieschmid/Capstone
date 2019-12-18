using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SchedulerAPI.Models;
using SchedulerAPI.Services;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace SchedulerAPI.Controllers
{
    // [Authorize]
   
    [ApiController]
    [Route("api/[controller]")]
    public class SessionController : ControllerBase
    {
        private IUserService _userService;
        private SchedulerAPIContext _db;

        public SessionController(
            IUserService userService,
             SchedulerAPIContext db)
        {
            _userService = userService;
            _db = db;
        }

        // [HttpGet]
        // public ActionResult<List<Session>> GetSessions(int id)
        // {
            
        //     var sessions = _db.Sessions.Where(p=>p.VolunteerId == id).Include(l=>l.Lessons);
        //     return sessions.ToList();
        // }

        // [Authorize]
        [HttpPost ("post-session")]
        // public void PostSessions([FromBody] Session session)
        // {
        //     _db.Sessions.Add(session);
        //     _db.SaveChanges();
        // }
        public void PostSessions([FromBody] Session newSession)
        {
            // var identity = (ClaimsIdentity)User.Identity;
            // Console.WriteLine(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
            // Console.WriteLine(ClaimTypes.Email);
            // var foundId = identity.FindFirst(ClaimTypes.Email).Value;
            
            // Console.WriteLine(ClaimTypes.Email);
            newSession.VolunteerId = 4;
            
            // Convert.ToInt32(foundId);
            _db.Sessions.Add(newSession);
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