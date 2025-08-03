const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Recruitment' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Accounting' },
    { id: 4, name: 'Emily Davis', age: 32, department: 'IT', salary: 55000, specialization: 'JavaScript' }
  ];
  
  function displayAllEmployees() {
    const totalEmployees = employees.map(employee =>
      `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
  }
  
  function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }
  
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map(employee =>
      `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
  }
  
  function findEmployeeById(id) {
    const employee = employees.find(emp => emp.id === id);
    const result = employee
      ? `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization}</p>`
      : "<p>Employee not found.</p>";
    document.getElementById('employeesDetails').innerHTML = result;
  }
  
  function searchBySpecialization() {
    const jsSpecialists = employees.filter(emp => emp.specialization === 'JavaScript');
    const result = jsSpecialists.length > 0
      ? jsSpecialists.map(emp =>
          `<p>${emp.id}: ${emp.name} - ${emp.department} - ${emp.specialization}</p>`
        ).join('')
      : "<p>No employees found with JavaScript specialization.</p>";
    document.getElementById('employeesDetails').innerHTML = result;
  }
