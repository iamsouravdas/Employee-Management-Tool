using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using EMS.Domain.Common;

namespace EMS.Domain.Models
{
    [Table("departments")]
    public class Department : BaseEntity
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required, StringLength(100)]
        [Column("department_name")]
        public string DepartmetName { get; set; } = string.Empty;
        //Relationships
        public ICollection<Employee>? Employees { get; set; }
    }
}