
import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {
  alluser: Object
  userobj={
    name:'',
    password:'',
  }
  userName ='';
  password = '';
  constructor(private routes:Router,) { }

  ngOnInit() {
    this.userobj.name,
    this.userobj.password

  }
  addUser(formobj: any){
    
let uname=formobj.name;
let pass=formobj.password;
localStorage.setItem('UserName', 'Password');
localStorage.UserName = uname;
localStorage.Password = pass;


if(uname=='Shahsoftsol.com' && pass=='admin123')
{
    this.routes.navigate(['/home'])
}else{
  alert("Please Enter Valid password");
}
 
   console.log(formobj)
  

  }
  
  resetUserForm(myForm:NgForm){
    myForm.resetForm();
    }
    

}
