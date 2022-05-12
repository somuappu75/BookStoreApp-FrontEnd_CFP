import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Service/UserService/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPassForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private userservice: UserServiceService) { }

  ngOnInit(): void {
    this.resetPassForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(6)]]
  });
}
onSubmit(){
  let data={password:this.resetPassForm.value.newPassword,
    confirmPassword:this.resetPassForm.value.confirmNewPassword}
  this.userservice.reset(data).subscribe((res:any)=>{
    console.log(res);
  })
}
}