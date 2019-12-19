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

        protected override void OnModelCreating(ModelBuilder builder)
    {
     builder.Entity<Session>()
          .HasData(
              new Session { SessionId = 1, VolunteerId = 4, Name = "June 15-19", Description = "Arts and Crafts", Location = "8754 NE Killingsworth", Openings = "7" },
              new Session { SessionId = 2, VolunteerId = 5, Name = "June 22-26", Description = "Adventures in Coding", Location = "5632 SE 92nd", Openings = "5" },
              new Session { SessionId = 3, VolunteerId = 1, Name = "July 6-10", Description = "Nature Trails", Location = "5555 NE 29th", Openings = "6" },
              new Volunteer { VolunteerId = 1, Email = "777@gmail.com", Password = "777" }
            );

     
    }
  }
}