import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import { FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu'; 
// import {MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import { BookandupdateComponent } from './Components/bookandupdate/bookandupdate.component';
import { GetallbooksComponent } from './Components/getallbooks/getallbooks.component';
import { CommonModule } from '@angular/common';
import { AddbookComponent } from './Components/addbook/addbook.component';
import {MatDialogModule} from '@angular/material/dialog';
import { QuickviewComponent } from './Components/quickview/quickview.component';
import { GetcartComponent } from './Components/getcart/getcart.component';
import {MatSelectModule} from '@angular/material/select';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { AuthguardServiceService } from './Service/authguardservice/authguard-service.service';
import { FilterPipe } from './Pipes/filter.pipe';
import { OrderComponent } from './Components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotpasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    BookandupdateComponent,
    GetallbooksComponent,
    AddbookComponent,
    QuickviewComponent,
    GetcartComponent,
    WishlistComponent,
    FilterPipe,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,MatCardModule,MatSnackBarModule,MatExpansionModule,MatBadgeModule,
    MatTableModule,MatTooltipModule,MatToolbarModule,MatButtonModule,MatIconModule,MatFormFieldModule,
    ReactiveFormsModule,MatRadioModule,HttpClientModule,MatInputModule,MatListModule,MatMenuModule,
    MatDialogModule,MatSelectModule
  ],
  providers: [
    AuthguardServiceService,
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
