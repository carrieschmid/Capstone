using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;
using Microsoft.AspNetCore.Identity;

namespace SchedulerAPI.Models
{
  public class SchedulerAPIContextFactory : IDesignTimeDbContextFactory<SchedulerAPIContext>
  {

    SchedulerAPIContext IDesignTimeDbContextFactory<SchedulerAPIContext>.CreateDbContext(string[] args)
    {
      IConfigurationRoot configuration = new ConfigurationBuilder()
          .SetBasePath(Directory.GetCurrentDirectory())
          .AddJsonFile("appsettings.json")
          .Build();

      var builder = new DbContextOptionsBuilder<SchedulerAPIContext>();
      var connectionString = configuration.GetConnectionString("DefaultConnection");

      builder.UseMySql(connectionString);

      return new SchedulerAPIContext(builder.Options);
    }
  }
}