import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/Service/Bookservice/bookservice.service';

@Component({
  selector: 'app-getcart',
  templateUrl: './getcart.component.html',
  styleUrls: ['./getcart.component.scss']
})
export class GetcartComponent implements OnInit {

  cartItems:any;
  cartItemsCount:any;
  book_quantity:number=1;

  show:boolean=true;
  showCustomerDetails:boolean = false;
  address:boolean = true;

  showSummeryDetails:boolean = false;
  summery:boolean = true;
  customerForm!:FormGroup;
  submitted = false;
  continue:boolean = true;

  constructor(private book:BookserviceService,private formbuilder: FormBuilder, private route:Router) { }

  ngOnInit(): void {
    // this.getAddToCart();

    this.customerForm = this.formbuilder.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })
  }

//   getAddToCart(){
//     this.book.getCartItems().subscribe((res:any)=>{
//       console.log("Cart items received", res);
//       this.cartItems=res.result;
//       this.cartItemsCount=res.result.length;
//       console.log("cart items",this.cartItems);
//       console.log("value",this.cartItemsCount);
      
//     })
//  }

 minus(item:any){
  if(this.book_quantity>1){
   this.book_quantity--
   let data = {
    "quantityToBuy":this.book_quantity
  }
  this.book.cartItemQuantity(item.product_id?._id, data).subscribe((res:any)=>{
    console.log("adding to card of this bookId", this.book_quantity);
  }, error=>{
    console.log(error);
  })

  }
}

plus(item:any){
 this.book_quantity++
 let data = {
  "quantityToBuy":this.book_quantity
}
this.book.cartItemQuantity(item.product_id?._id, data).subscribe((res:any)=>{
  console.log("quantity of cart item updated", this.book_quantity);
}, error=>{
  console.log(error);
})
}

// removeItem(item:any){
//    this.book.removeCartItem(item._id).subscribe((res:any)=>{
//      console.log("Item removed",res);
//      this.ngOnInit();

//    }, error=>{
//     console.log(error);
//   })
// }

showDetails(){
  if(this.showCustomerDetails == false){
    this.showCustomerDetails = true
    this.address = false;
  }
  this.show = false;
}

onSubmit(){
//   this.submitted = true;
//   if (this.customerForm.valid) {
//       console.log("valid data", this.customerForm.value);
//       let data={
//         addressType: "Home",
//         fullAddress: this.customerForm.value.address,
//         city: this.customerForm.value.city,
//         state: this.customerForm.value.state
//       }
//       this.book.customerDetails(data).subscribe((response:any)=>{
//         console.log("Details received",response);
//       }, (error: any) =>{
//         console.log(error);
//       })
//   } else {
//     console.log("Fill the address details");
//   }
 }

showOrderDetails(){
  if(this.showSummeryDetails == false && this.customerForm.valid){
    this.showSummeryDetails = true
    this.summery = false;
  }
  this.continue= false
}

ordersummary() {

  let data = {
    "orders": [
      {
        "product_id": "5f60c89223809243e2528781",
        "product_name": "Xyzabc",
        "product_quantity": 10,
        "product_price": 1000
      }
    ]
  }
  // this.book.addOrder(data).subscribe((response: any) => {
  //   console.log(response);
  // })
  // this.route.navigateByUrl("/dashboard/order")
}


}
