using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using EMS.Domain.Common;

namespace EMS.Domain.Models
{
    [Table("projects")]
    public class Project : BaseEntity
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required, StringLength(100)]
        [Column("name")]
        public string? Name { get; set; }

        [StringLength(250)]
        [Column("description")]
        public string? Description { get; set; }

        [Required]
        [Column("start_date")]
        public DateTime StartDate { get; set; }

        [Column("end_date")]
        public DateTime EndDate { get; set; }
        public bool IsActive { get; set; } = true;

        //Relationships
        public ICollection<EmployeeProject>? EmployeeProjects { get; set; }
    }
}