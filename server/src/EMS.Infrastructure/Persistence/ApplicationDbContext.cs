using EMS.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace EMS.Infrastructure.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Tables
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Position> Positions { get; set; }
        public DbSet<EmployeeProject> EmployeeProjects { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<SalaryMaster> Salaries { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            ConfigureSoftDelete(modelBuilder);
            ConfigureRelationships(modelBuilder);
        }

        // --------------------------------------------------------
        //  Global Soft Delete Filter (Dynamic)
        // Applies to any entity containing: IsDeleted or isDeleted
        // --------------------------------------------------------
        private void ConfigureSoftDelete(ModelBuilder modelBuilder)
        {
            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                var clr = entityType.ClrType;

                // Search for soft-delete property
                var deleteProp =
                    clr.GetProperty("IsDeleted");

                if (deleteProp != null && deleteProp.PropertyType == typeof(bool))
                {
                    var parameter = Expression.Parameter(clr, "e");
                    var propertyAccess = Expression.Property(parameter, deleteProp);
                    var filter = Expression.Equal(propertyAccess, Expression.Constant(false));

                    var lambda = Expression.Lambda(filter, parameter);

                    modelBuilder.Entity(clr).HasQueryFilter(lambda);
                }
            }
        }

        // --------------------------------------------------------
        // Relationships
        // --------------------------------------------------------
        private void ConfigureRelationships(ModelBuilder modelBuilder)
        {
            // 1. Employee → Position
            modelBuilder.Entity<Employee>()
                .HasOne(e => e.Position)
                .WithMany(p => p.Employees)
                .HasForeignKey(e => e.PositionId);

            // 2. Employee → Department
            modelBuilder.Entity<Employee>()
                .HasOne(e => e.Department)
                .WithMany(d => d.Employees)
                .HasForeignKey(e => e.DepartmentId);

            // 3. Employee → SalaryMaster
            modelBuilder.Entity<Employee>()
                .HasOne(e => e.SalaryMaster)
                .WithMany(s => s.Employees)
                .HasForeignKey(e => e.SalaryMasterId);

            // 4. EmployeeProject Composite Key
            modelBuilder.Entity<EmployeeProject>()
                .HasKey(ep => new { ep.EmployeeId, ep.ProjectId });

            modelBuilder.Entity<EmployeeProject>()
                .HasOne(ep => ep.Employee)
                .WithMany(e => e.Projects)
                .HasForeignKey(ep => ep.EmployeeId);

            modelBuilder.Entity<EmployeeProject>()
                .HasOne(ep => ep.Project)
                .WithMany(p => p.EmployeeProjects)
                .HasForeignKey(ep => ep.ProjectId);
        }
    }
}
