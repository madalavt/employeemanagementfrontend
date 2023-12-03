import React, { useEffect, useState} from 'react'
import EmployeeService from '../service/EmployeeService'
import { Link, useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
  const [employeeArray,setEmployeeArray]=useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    getAllEmployee();
  },[]);
  function getAllEmployee(){
    EmployeeService.getAllEmployee()
    .then(res=>{setEmployeeArray(res.data)})
    .catch(e=>console.log(e));
  }
  function deleteEmployee(e,id){
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then(e=>{getAllEmployee(); alert("item deleted"); }).catch(e => console.log(e));
  }
  return (
    <div className='container'>
        <a className='btn btn-primary mb-2 mt-3' href="/add-employee">Add Employee</a>
        <h2 className='text-center mb-4'>List Employee</h2>
        <table className='table table-bordered table striped'>
            <thead>
                <th>Employee ID</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
            </thead>
            <tbody>
{
  employeeArray.map(employee=><tr id={employee.id}>
    <td>{employee.id}</td>
    <td>{employee.firstName}</td>
    <td>{employee.lastName}</td>
    <td>{employee.email}</td>
<td>
  <Link to={`/add-employee/${employee.id}`} className="btn btn-info" href="">Update</Link>
  <button onClick={(e) => deleteEmployee(e,employee.id)} className='btn btn-success'>Delete</button> 
</td>
    </tr>)
}
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent