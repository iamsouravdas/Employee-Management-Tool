using EMS.Application.DTOs.EmployeeProject.cs;

namespace EMS.Application.DTOs.Employee
{
    public class EmployeeDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string? PhoneNumber { get; set; }
        public DateTime DateOfBirth { get; set; }
        public DateTime DateOfJoining { get; set; }
        public string? ImageUrl { get; set; }
        public bool IsActive { get; set; }

        public int DepartmentId { get; set; }
        public int PositionId { get; set; }
        public int SalaryMasterId { get; set; }

        public List<EmployeeProjectDto>? Projects { get; set; }
    }
}