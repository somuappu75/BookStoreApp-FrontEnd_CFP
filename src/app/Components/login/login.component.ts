import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/UserService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor( private formbuilder:FormBuilder,private user:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }); 
  }
  
  onSubmitloginForm(){
    console.log("Login-inputs", this.loginForm.value);
    if(this.loginForm.valid){
      console.log("valid-Creditionals",this.loginForm.value);
      let data= {
        Email:this.loginForm.value.email,
        Password:this.loginForm.value.password,
      }
      this.user.login(data).subscribe((res:any)=>{
        console.log(res);
        localStorage.setItem('token', res.data);
        this.router.navigateByUrl("/dashboard/Getallbooks");
      })
  }
  else{
    console.log("Enter valid Email And Password!!!!");
  }
}
}

