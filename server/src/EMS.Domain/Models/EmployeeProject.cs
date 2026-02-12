using System.ComponentModel.DataAnnotations.Schema;

namespace EMS.Domain.Models
{
    [Table("employee_projects")]
    public class EmployeeProject
    {
        [Column("employee_id")]
        public int EmployeeId { get; set; }

        [Column("project_id")]
        public int ProjectId { get; set; }

        public Employee Employee { get; set; } = null!;
        public Project Project { get; set; } = null!;

    }
}