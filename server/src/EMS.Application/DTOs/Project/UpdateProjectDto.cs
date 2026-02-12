

namespace EMS.Application.DTOs.Project
{
    public class UpdateProjectDto : CreateProjectDto
    {
        public bool? IsActive { get; set; }
    }
}