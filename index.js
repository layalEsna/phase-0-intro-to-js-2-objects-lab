// Write your solution in this file!
const employee = {
    
  "name": "Bob",
  "streetAddress": "123 road"
     };

     function updateEmployeeWithKeyAndValue(employee, key, value){
        const newEmployee = {...employee};
        newEmployee[key] = value;
        return newEmployee
     };

     function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key] = value;
        return employee
     }

     function deleteFromEmployeeByKey(employee, key){
        let removed = {...employee}
       delete removed[key]
        return removed
     };

     function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee[key];
        return employee

     }
    
        
//test
     