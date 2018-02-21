import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import {ScrollModule} from './scroll/scroll.module';
import { AuthguardService as AuthGuard } from './authguard.service';
import { LoginComponent } from './authenication/login/login.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ForgetComponent } from './authenication/forget/forget.component';
import { RegistrationComponent } from './authenication/registration/registration.component';
import { HeaderbarComponent } from './layouts/headerbar/headerbar.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { MenuItems } from './shared/menu-items/menu-items';
import { DashboardRoutes } from './layouts/dashboard/dashboard.routing';
import { ProfileComponent } from './user/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const appRoutes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full'},
   { path: 'login', component: LoginComponent },
   { path: 'authenication/forgot', component: ForgetComponent },
   { path: 'authenication/registration', component: RegistrationComponent },
   { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    ForgetComponent,
    RegistrationComponent,
    HeaderbarComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    RouterModule.forChild(DashboardRoutes),
    HttpModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard, MenuItems, SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
