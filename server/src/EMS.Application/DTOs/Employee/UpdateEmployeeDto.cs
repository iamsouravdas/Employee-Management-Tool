using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMS.Application.DTOs.Employee
{
    public class UpdateEmployeeDto
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public DateTime? DateOfJoining { get; set; }
        public string? ImageUrl { get; set; }
        public bool? IsActive { get; set; }

        public int? DepartmentId { get; set; }
        public int? PositionId { get; set; }
        public int? SalaryMasterId { get; set; }

        public List<int>? ProjectIds { get; set; }
    }
}