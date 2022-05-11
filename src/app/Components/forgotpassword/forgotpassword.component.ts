import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Service/UserService/user-service.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  constructor(private fb:FormBuilder,private user:UserServiceService) { }

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onSubmit(){
    let data={email:this.forgotForm.value.email}
    this.user.forget(data).subscribe((res:any)=>{
      console.log(res);
    })

  }

}