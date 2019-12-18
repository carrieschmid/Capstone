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
              new Session { SessionId = 1, VolunteerId = 1, Name = "First Test Project", Description = "This is a description.", Location = "PDX", Date = "Jan.", Openings = "7" },
              new Session { SessionId = 2, VolunteerId = 1, Name = "First Test Project", Description = "This is a description.", Location = "PDX", Date = "Jan.", Openings = "7" }
            );

     
    }
  }
}