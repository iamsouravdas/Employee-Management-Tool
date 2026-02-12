using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using EMS.Domain.Common;

namespace EMS.Domain.Models
{
    [Table("positions")]
    public class Position : BaseEntity
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required, StringLength(100)]
        [Column("title")]
        public string Title { get; set; } = string.Empty;

        [StringLength(250)]
        [Column("description")]
        public string Description { get; set; } = string.Empty;

        [Column("is_active")]
        public bool IsActive { get; set; } = true;

        //Relationships
        public ICollection<Employee>? Employees { get; set; }
    }
}