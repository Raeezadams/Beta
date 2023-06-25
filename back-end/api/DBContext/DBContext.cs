using Microsoft.EntityFrameworkCore;
using api.Entities;
using System.Collections.Generic;
using System.Reflection.Emit;


namespace api.Context
{
    public partial class APIDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public APIDbContext(DbContextOptions<APIDbContext> options) : base(options)
        {
        }

        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<User>().ToTable("user");
            }
       
    }
}

