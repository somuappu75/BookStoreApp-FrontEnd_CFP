import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/Service/Bookservice/bookservice.service';

@Component({
  selector: 'app-bookandupdate',
  templateUrl: './bookandupdate.component.html',
  styleUrls: ['./bookandupdate.component.scss']
})
export class BookandupdateComponent implements OnInit {
  bookandupdateForm!: FormGroup;

  constructor(private form:FormBuilder,private book:BookserviceService,private router:Router ) { }

  ngOnInit(): void {
    this.bookandupdateForm = this.form.group({
      bookname: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      bookquantity: ['', Validators.required],
      actualprice: ['', Validators.required],
      discountprice: ['', Validators.required],

    });
  }
    onSubmit(){
      console.log("inputs", this.bookandupdateForm.value);
      if(this.bookandupdateForm.valid){
        console.log("valid-Details",this.bookandupdateForm.value);
        let reqdata= {
          BookName:this.bookandupdateForm.value.bookname,
          AuthorName:this.bookandupdateForm.value.author,
          Description:this.bookandupdateForm.value.description,
          BookQuantity:this.bookandupdateForm.value.bookquantity,
          ActualPrice:this.bookandupdateForm.value.actualprice,
          DiscountPrice:this.bookandupdateForm.value.discountprice,
           Rating:4.5,
           RatingCount:23,
           BookImage:' ',

        }
        this.book.addbook(reqdata).subscribe((res:any)=>{
          console.log(res);
        })

}
else{
  console.log("Enter valid data");
}
    }
}
