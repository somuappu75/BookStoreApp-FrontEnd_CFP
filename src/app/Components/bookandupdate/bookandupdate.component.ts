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
 // submitted = false;

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
   //  this.submitted=true;
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
    
  //   this.submitted = true;
  //   if (this.bookandupdateForm.valid) {
  //     console.log(this.bookandupdateForm.value);
  //     let reqdata = {
  //       BookName: this.bookandupdateForm.value.bookname,
  //       AuthorName: this.bookandupdateForm.value.author,
  //       Description: this.bookandupdateForm.value.description,
  //      bookCount: +this.bookandupdateForm.value.quantity,
  //      ActualPrice:+ this.bookandupdateForm.value.price,
  //      DiscountPrice: +this.bookandupdateForm.value.discountprice,
  //      Rating:4.5,
  //       Reviewer:23,
  //       BookImage:' ',
      
        

  //     }
  //     if (this.data.isAddBook) {
  //       this.book.adminaddbook(reqdata).subscribe((response: any) => {
  //         console.log(response);

  //         //  localStorage.setItem('token', response.result.accessToken)
  //         // this.route.navigateByUrl('dashboard/admin')

  //           window.location.reload();
  //       });
        

  //     } else{
  //       this.book.adminupdatebook(this.data.bookobject._id,reqdata).subscribe((response:any) => {  //._id is used because we are updating the particular product by its id & .data.bookobject is coming from admin.ts from update() method from data: {bookobject}
  //         console.log(response);
  
  //         //  localStorage.setItem('token', response.result.accessToken)
  //           // this.route.navigateByUrl('dashboard/admin')
         
  //            window.location.reload();
  //       });
  //     }
      
  //   }

  // }
  // close(): void {
  //   this.dialogRef.close()
  // }

}
else{
  console.log("Enter valid data");
}
    }
}
