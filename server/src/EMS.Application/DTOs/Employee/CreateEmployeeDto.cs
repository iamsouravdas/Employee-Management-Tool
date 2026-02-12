using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMS.Application.DTOs.Employee
{
    public class CreateEmployeeDto
    {
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string? PhoneNumber { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime DateOfJoining { get; set; }
        public string? ImageUrl { get; set; }

        public int DepartmentId { get; set; }
        public int PositionId { get; set; }
        public int SalaryMasterId { get; set; }

        public List<int>? ProjectIds { get; set; }
    }
}