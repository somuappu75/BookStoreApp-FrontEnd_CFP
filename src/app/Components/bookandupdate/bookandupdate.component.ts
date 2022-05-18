import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/Service/Bookservice/bookservice.service';

@Component({
  selector: 'app-bookandupdate',
  templateUrl: './bookandupdate.component.html',
  styleUrls: ['./bookandupdate.component.scss']
})
export class BookandupdateComponent implements OnInit {
  bookandupdateForm!: FormGroup;
  submitted = false;

  constructor(private form:FormBuilder,private book:BookserviceService,private router:Router,
    public dialogRef: MatDialogRef<BookandupdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, ) { }

  ngOnInit(): void {
    this.bookandupdateForm = this.form.group({
      bookname: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      discountprice: ['', Validators.required],

    });

    if (this.data?.bookobject != null) { 
      this.bookandupdateForm.patchValue({   
        bookname: this.data?.bookobject['bookName'],
        authorName: this.data?.bookobject['author'],
        bookDescription: this.data?.bookobject['description'],
        discountPrice:+this.data?.bookobject['discountPrice'],
        originalPrice:+ this.data?.bookobject['price'],
        bookCount:+ this.data?.bookobject['quantity']
        
      })
    }

  }
  addandupdate() {
    this.submitted = true;
    if (this.bookandupdateForm.valid) {
      console.log(this.bookandupdateForm.value);
      let reqdata = {
        BookName: this.bookandupdateForm.value.bookname,
        AuthorName: this.bookandupdateForm.value.author,
        Description: this.bookandupdateForm.value.description,
       bookCount: +this.bookandupdateForm.value.quantity,
       ActualPrice:+ this.bookandupdateForm.value.price,
       DiscountPrice: +this.bookandupdateForm.value.discountprice,
       Rating:4.5,
        Reviewer:23,
        BookImage:' ',
      
        

      }
      if (this.data.isAddBook) {
        this.book.adminaddbook(reqdata).subscribe((response: any) => {
          console.log(response);

          //  localStorage.setItem('token', response.result.accessToken)
          // this.route.navigateByUrl('dashboard/admin')

            window.location.reload();
        });
        

      } else{
        this.book.adminupdatebook(this.data.bookobject._id,reqdata).subscribe((response:any) => {  //._id is used because we are updating the particular product by its id & .data.bookobject is coming from admin.ts from update() method from data: {bookobject}
          console.log(response);
  
          //  localStorage.setItem('token', response.result.accessToken)
            // this.route.navigateByUrl('dashboard/admin')
         
             window.location.reload();
        });
      }
      
    }

  }
  close(): void {
    this.dialogRef.close()
  }

}