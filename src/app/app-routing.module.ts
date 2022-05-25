import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { AddbookComponent } from './Components/addbook/addbook.component';
import { BookandupdateComponent } from './Components/bookandupdate/bookandupdate.component';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { GetcartComponent } from './Components/getcart/getcart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { AuthenticationGuard } from './Components/authentication.guard';
import { OrderComponent } from './Components/order/order.component';
const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'addbook',component:AddbookComponent},
  {path:'forgot',component:ForgotpasswordComponent},
  {path:'reset',component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:'Getallbooks',component:GetallbooksComponent},
    {path:'addbook',component:AddbookComponent},
    {path:'cart',component:GetcartComponent},
    {path:'bookandupdate',component:BookandupdateComponent},
    {path:'quickview/:id',component:QuickviewComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'order',component:OrderComponent},
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
