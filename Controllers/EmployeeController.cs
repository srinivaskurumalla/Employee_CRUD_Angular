using Employee_CRUD.Models;
using Employee_CRUD.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Employee_CRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeRepo employeeRepo;

        public EmployeeController(EmployeeRepo employeeRepo)
        {
            this.employeeRepo = employeeRepo;
        }

        [HttpGet("GetAllEmployees")]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await employeeRepo.GetAllEmployees();
            return Ok(employees);
        }

        [HttpPost("AddEmployee")]
        public async Task<IActionResult> AddEmployee(Employee emp)
        {
            await employeeRepo.AddEmployee(emp);
            return StatusCode(201);
        }

        [HttpDelete("DeleteEmployee/{id}")]
        public async Task<IActionResult> DeletEmployee(int id)
        {
            await employeeRepo.DeleteEmployee(id);
            return StatusCode(200);
        }

        [HttpGet("GetEmployeeById/{id}")]
        public async Task<IActionResult> GetEmployeeById(int id)
        {
            var emp = await employeeRepo.GetEmployeeById(id);
            return Ok(emp);
        }
        [HttpPut("UpdateEmployee/{id}")]
        public async Task<IActionResult> UpdateEmployee(int id, [FromBody] Employee employee)
        {
            var emp = await employeeRepo.UpdateEmployee(id, employee);
            return Ok(emp);
        }

    }
}
