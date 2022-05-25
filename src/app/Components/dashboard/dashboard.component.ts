import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Service/dataservice/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  badgecount: any; 
  fullName: any;
  isSearch = false; 
 
  constructor(private route: Router, private dataservice: DataserviceService) {
    this.fullName = localStorage.getItem('fullName');

  }


  ngOnInit(): void {
   
  }
  bookstore() {
    this.route.navigateByUrl("/dashboard/get-allbooks")
  }
  Logout() {
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
  wishlist() {
    this.route.navigateByUrl("/dashboard/getwishlist")
  }
  getcart()
  {
    this.route.navigateByUrl("/dashboard/getcart")
  }
  orders()
  {
    this.route.navigateByUrl("/dashboard/orders")
  }
  Addbook()
  {
    this.route.navigateByUrl("/dashboard/addbook") 
  }
  updateText(filteredString: any){
    console.log("string msg", filteredString.target.value);
    this.dataservice.updateData(filteredString.target.value);
}
}