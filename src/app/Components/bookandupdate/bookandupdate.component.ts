import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/Service/Bookservice/bookservice.service';

@Component({
  selector: 'app-bookandupdate',
  templateUrl: './bookandupdate.component.html',
  styleUrls: ['./bookandupdate.component.scss']
})
export class BookandupdateComponent implements OnInit {
  bookandupdateForm!: FormGroup;

  constructor(private form:FormBuilder,private book:BookserviceService,private router:Router) { }

  ngOnInit(): void {
    this.bookandupdateForm = this.form.group({
      bookname: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      discountprice: ['', Validators.required],

    });


  }

}
