import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Service/UserService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  category:any;

  constructor(private formBuilder: FormBuilder,private user:UserServiceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required],
    }); 
  }

  // admin(){
  //   this.category = true;
  // }

  // userReg(){
  //   this.category = false;
  // }

  onSubmit(){
    this.submitted=true;
    console.log("inputs", this.registerForm.value);
    if(this.registerForm.valid){
      console.log("valid-Details",this.registerForm.value);
      let data= {
        FullName:this.registerForm.value.fullName,
        Email:this.registerForm.value.email,
          Password:this.registerForm.value.password,
          MobileNumber:this.registerForm.value.phone,
      }
      this.user.register(data).subscribe((res:any)=>{
        console.log(res);
      })
      // if(this.category == true){
      //   this.user.adminRegister(data).subscribe((response:any)=>{
      //     console.log(response); 
      //   },(error:any)=>{
      //     console.log(error);    
      //   })
      // }
      // else if(this.category == false){
      //   this.user.register(data).subscribe((response:any)=>{
      //     console.log("done",response);
      //   }, (error:any)=>{
      //     console.log(error);    
      //   })
      //  }
      }
     
    else{
      console.log("Enter valid data");
    }

  }
}
    
  
