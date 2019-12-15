using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using SchedulerAPI.Helpers;
using SchedulerAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace SchedulerAPI.Services
{
    public interface IUserService
    {
        Volunteer Authenticate(string username, string password);
        // IEnumerable<Volunteer> GetAll();
        void Create(Volunteer Volunteer);
    }

    public class UserService : IUserService
    {
        private readonly SchedulerAPIContext _db;
        private List<Volunteer> _volunteers;       

        private readonly AppSettings _appSettings;

        public UserService(IOptions<AppSettings> appSettings, SchedulerAPIContext db)
        {
            _appSettings = appSettings.Value;
            _db = db;
            _volunteers = _db.Volunteers.ToList();
        }

        public Volunteer Authenticate(string username, string password)
        {
            

            var volunteer = _volunteers.SingleOrDefault(x => x.Username == username && x.Password == password);
            
            if (volunteer == null)
            return null;

            {
            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] 
                {
                    new Claim(ClaimTypes.Name, volunteer.VolunteerId.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            volunteer.Token = tokenHandler.WriteToken(token);

            // remove password before returning
            volunteer.Password = null;

            return volunteer;
        }
        //  else {
        //     return null;
        // }
        
    }
        public void Create(Volunteer newVolunteer)
        {
            // if(!_db.Users.Any( a => a.Username == newUser.Username))
            // {
                _db.Volunteers.Add(newVolunteer);
                _db.SaveChanges();
            // }
            
        }

        public IEnumerable<Volunteer> GetAll()
        {
            // return users without passwords
            return _volunteers.Select(x => {
                x.Password = null;
                return x;
            });
        }
    }
}