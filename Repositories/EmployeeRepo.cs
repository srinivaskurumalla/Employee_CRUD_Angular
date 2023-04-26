using Employee_CRUD.Db;
using Employee_CRUD.Interfaces;
using Employee_CRUD.Models;
using Microsoft.EntityFrameworkCore;

namespace Employee_CRUD.Repositories
{
    public class EmployeeRepo : IEmployee
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public EmployeeRepo(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

     

        public async Task AddEmployee(Employee emp)
        {
            if(emp != null)
            {
                _applicationDbContext.Add(emp);
                await _applicationDbContext.SaveChangesAsync();
            }
        }

        public async Task DeleteEmployee(int id)
        {
            var emp = await _applicationDbContext.Employees.FindAsync(id);
            if (emp != null)
            {
                _applicationDbContext.Employees.Remove(emp);
                _applicationDbContext.SaveChanges();
            }
        }

        public async Task<IEnumerable<Employee>> GetAllEmployees()
        {
            return await _applicationDbContext.Employees.ToListAsync();
        }

        public async Task<Employee> GetEmployeeById(int id)
        {

            return await _applicationDbContext.Employees.FindAsync(id);
           
        }

        public async Task<Employee> UpdateEmployee(int id, Employee employee)
        {
            var emp = await _applicationDbContext.Employees.FindAsync(id);

            if (emp != null)
            {
                emp.FirstName = employee.FirstName;
                emp.LastName = employee.LastName;
                emp.Email = employee.Email;
                emp.Education = employee.Education;
                emp.Experience = employee.Experience;
                emp.Dob = employee.Dob;
                emp.Company = employee.Company;
                emp.Gender = employee.Gender;
                emp.Package = employee.Package;

                await _applicationDbContext.SaveChangesAsync();
            }

            return emp;
        }
        
    }
    
}
