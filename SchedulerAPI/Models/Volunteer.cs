using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace SchedulerAPI.Models
{
    public class Volunteer
    {
        public int VolunteerId {get;set;}
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string Username {get;set;}
        public string Password {get;set;}
        public string PhoneNumber {get; set;}
        public string Email {get; set;}
        public string TrainingCheck {get; set;}
        public string BackgroundCheck {get; set;}
        public string Token {get;set;}
        
        public ICollection<Session> Sessions {get;set;}
        public ICollection<Lesson> Lessons {get;set;}
        public Volunteer()
        {  
            this.Sessions = new HashSet<Session>();
            this.Lessons = new HashSet<Lesson>();
           
        }
    }
}