using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using SchedulerAPI.Services;
using SchedulerAPI.Models;
using System.Collections.Generic;
using System.Linq;
using System;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;

namespace SchedulerAPI.Controllers
{
 [Route("[controller]")]
    [ApiController]
    
    public class VolunteerController : ControllerBase
    {
        private IUserService _userService;
        private readonly SchedulerAPIContext _db;

        public VolunteerController(
            IUserService userService, 
            SchedulerAPIContext db)
        {
            _userService = userService;
            _db = db;
        }
        
        // [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]Volunteer user)
        {
            Console.WriteLine(user.Username);
            Console.WriteLine(user.Password);
            var volunteer = _userService.Authenticate(user.Username, user.Password);
            System.Console.WriteLine("user logged in");

            if (volunteer == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(volunteer);
        }

        // [AllowAnonymous]
        [HttpPost("create")]
        public void Create([FromBody] Volunteer newVolunteer)
        {
        _db.Volunteers.Add(newVolunteer);
        _db.SaveChanges();
        }

    
    [HttpGet]
    
    public ActionResult<Volunteer> GetVolunteerSessions()
    {
      var identity = (ClaimsIdentity)User.Identity;
      var foundId = identity.FindFirst(ClaimTypes.Name).Value;
      Volunteer foundVolunteer = _db.Volunteers.Include(u => u.Sessions).ThenInclude(u => u.Lessons).FirstOrDefault(u => u.VolunteerId == Convert.ToInt32(foundId));
      return foundVolunteer;
    }

    }
}



    // [HttpGet]
        // public ActionResult<IEnumerable<Volunteer>> GetAll()
        // {
        //     var users = _db.Volunteers.Include(u => u.Sessions).ThenInclude(u => u.Lessons).AsQueryable();
        //     return Ok(users);
        // }

    //   [HttpPost]
    //     public void Post([FromBody] Volunteer newVolunteer)
    //     {
    //         _db.Volunteers.Add(newVolunteer);
    //         _db.SaveChanges();
    //     }


    //     [Authorize]
    //     [HttpGet("userpage")]  
    //     public ActionResult<Volunteer> GetUserPage()
    //     {   
    //         var identity = (ClaimsIdentity)User.Identity;
    //         var foundId = identity.FindFirst(ClaimTypes.Name).Value;
    //         Console.WriteLine("this is from the controller" + identity);
    //         Console.WriteLine("this is the second log from the controller" + foundId);
    //         Volunteer foundUser = _db.Volunteers.Include(u => u.Sessions).ThenInclude(u => u.Lessons).FirstOrDefault(u => u.VolunteerId == Convert.ToInt32(foundId));
    //         return foundUser;
    //     }
    // }