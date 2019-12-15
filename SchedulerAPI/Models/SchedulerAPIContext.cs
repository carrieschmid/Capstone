using Microsoft.EntityFrameworkCore;

namespace SchedulerAPI.Models
{
    public class SchedulerAPIContext : DbContext 
    {
        public SchedulerAPIContext(DbContextOptions<SchedulerAPIContext> options) : base (options)
        {

        }
        public DbSet<Lesson> Lessons {get;set;}
        public DbSet<Session> Sessions {get;set;}
        public DbSet<Volunteer> Volunteers {get;set;}
        public DbSet<Participant> Participants {get;set;}
     }
}