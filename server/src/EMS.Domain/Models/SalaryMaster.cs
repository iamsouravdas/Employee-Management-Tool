using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EMS.Domain.Models
{
    [Table("salary_masters")]
    public class SalaryMaster
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("basic_salary")]
        public decimal BasicSalary { get; set; }


        [Column("hra")]
        public decimal HRA { get; set; }


        [Column("da")]
        public decimal DA { get; set; }


        [Column("ma")]
        public decimal MA { get; set; }

        [Column("pf")]
        public decimal PF { get; set; }

        [Column("tds")]
        public decimal TDS { get; set; }

        public ICollection<Employee>? Employees { get; set; }
    }
}