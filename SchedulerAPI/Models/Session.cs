using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;


namespace SchedulerAPI.Models
{
    public class Session
    {
        public int SessionId {get;set;}
        public int VolunteerId {get;set;}
        
        public Volunteer Volunteer {get;set;}

        
        public string Location {get;set;}
        public string Name {get;set;}
        public string Description {get;set;}
        public string Selected {get;set;}
        public string LessonAdded {get; set;}
        public string Date {get;set;}
        public string Openings {get;set;}
        public virtual ICollection<Lesson> Lessons {get;set;}
        public virtual ICollection<Participant> Participants {get;set;}

        public Session()
        {
            this.Lessons = new HashSet<Lesson>();

            this.Participants = new HashSet<Participant>();
        }
       
        
    }
}