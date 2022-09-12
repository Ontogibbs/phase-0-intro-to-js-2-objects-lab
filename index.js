const employee = {
    name : "Shania Twain",
    streetAddress : "Canada"

}

function updateEmployeeWithKeyAndValue(employee, key, value){
 const newEmployee ={...employee, name: "Sam", streetAddress: "11 Broadway"}
console.log(newEmployee)
 return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value; 
console.log(employee)
  return employee
}

function deleteFromEmployeeByKey(employee, key){
  const newEmployee ={...employee}

  delete newEmployee[key]

return newEmployee

}

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key]

    return employee



}
