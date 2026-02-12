using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using EMS.Domain.Common;

namespace EMS.Domain.Models
{
    [Table("employees")]
    public class Employee : BaseEntity
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required, StringLength(50)]
        [Column("first_name")]
        public string FirstName { get; set; } = string.Empty;

        [Required, StringLength(50)]
        [Column("last_name")]
        public string LastName { get; set; } = string.Empty;

        [Required, StringLength(100)]
        [Column("email")]
        public string Email { get; set; } = string.Empty;

        [StringLength(10)]
        [Column("phone_number")]
        public string PhoneNumber { get; set; } = string.Empty;

        [Required]
        [Column("date_of_birth")]
        public DateTime DateOfBirth { get; set; }

        [Required]
        [Column("date_of_joining")]
        public DateTime DateOfJoining { get; set; }

        [Column("image_url")]
        public string? ImageUrl { get; set; }

        [Required]
        [Column("is_active")]
        public bool isActive { get; set; } = true;

        [ForeignKey("Department")]
        [Column("department_id")]
        public int DepartmentId { get; set; }

        [ForeignKey("Position")]
        [Column("position_id")]
        public int PositionId { get; set; }

        [ForeignKey("SalaryMaster")]
        [Column("salary_master_id")]
        public int SalaryMasterId { get; set; }

        //Relationships
        public Department? Department { get; set; }
        public Position? Position { get; set; }
        public ICollection<EmployeeProject>? Projects { get; set; }
        public SalaryMaster? SalaryMaster { get; set; }
    }
}