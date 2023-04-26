using Employee_CRUD.Models;
using System.Collections;

namespace Employee_CRUD.Interfaces
{
    public interface IEmployee
    {
        Task<IEnumerable<Employee>> GetAllEmployees();
        Task AddEmployee(Employee emp);
        Task DeleteEmployee(int id);
        Task<Employee> GetEmployeeById(int id);
        Task<Employee> UpdateEmployee(int id, Employee employee);

    }
}
