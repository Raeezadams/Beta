using Microsoft.EntityFrameworkCore;
using api.Entities;
using System.Collections.Generic;
using System.Reflection.Emit;


namespace api.Context
{
    public partial class APIDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Cart> CartItems { get; set; }
        public APIDbContext(DbContextOptions<APIDbContext> options) : base(options)
        {
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User", "ss");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product", "ss");
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.ToTable("Cart", "ss");
            });
        }
    }
      
    }

