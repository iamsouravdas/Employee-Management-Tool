using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMS.Application.DTOs.SalaryMaster
{
    public class UpdateSalaryMater
    {
        public decimal? BasicSalary { get; set; }
        public decimal? HRA { get; set; }
        public decimal? DA { get; set; }
        public decimal? MA { get; set; }
        public decimal? PF { get; set; }
        public decimal? TDS { get; set; }
    }
}