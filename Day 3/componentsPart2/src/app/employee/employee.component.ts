import { Component } from "@angular/core";


@Component({
    selector:'employee',
    templateUrl:'./employee.component.html',
    styleUrls:['./employee.component.css']
})
export class Employee
{

    dateofRelase = new Date();

    developerName = "nikhil";
    employeeDetails = [
        {empNo:101, empName:'chirag', empDesignation:'Sales', empSalary:4000, empIsPermenant:true},
        {empNo:102, empName:'NIKHIL', empDesignation:'Sales', empSalary:4000, empIsPermenant:true},
        {empNo:103, empName:'nikhil', empDesignation:'Sales', empSalary:4000, empIsPermenant:false},
        {empNo:104, empName:'Rshni', empDesignation:'Sales', empSalary:4000, empIsPermenant:true},
        {empNo:105, empName:'Aman', empDesignation:'Sales', empSalary:4000, empIsPermenant:true},
        {empNo:106, empName:'Suman', empDesignation:'Sales', empSalary:4000, empIsPermenant:true},
        {empNo:107, empName:'Rahul', empDesignation:'Sales', empSalary:4000, empIsPermenant:false},
        {empNo:108, empName:'Rohit', empDesignation:'Sales', empSalary:4000, empIsPermenant:true},
        {empNo:109, empName:'Ramesh', empDesignation:'Sales', empSalary:4000, empIsPermenant:true},
        {empNo:110, empName:'suresh', empDesignation:'Sales', empSalary:4000, empIsPermenant:true},
        {empNo:111, empName:'ranjan', empDesignation:'Sales', empSalary:4000, empIsPermenant:false},
        {empNo:112, empName:'KRIti', empDesignation:'Sales', empSalary:4000, empIsPermenant:true},
    ];

    addNewEmployee(no:string,name:string,designation:string,salary:string,ispermenant:any)
    {
     var  newEmp ={
           empNo:parseInt(no),
           empName:name,
           empDesignation:designation,
           empSalary:parseInt(salary),
           empIsPermenant:ispermenant
       }

       this.employeeDetails.push(newEmp);
    }
}
