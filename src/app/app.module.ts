import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AuthguardService as AuthGuard } from './authguard.service';
import { LoginComponent } from './authenication/login/login.component';
import { SharedModule } from './shared/shared.module';
import {ScrollModule} from './scroll/scroll.module';
import { ForgetComponent } from './authenication/forget/forget.component';
import { RegistrationComponent } from './authenication/registration/registration.component';
import { HeaderbarComponent } from './layouts/headerbar/headerbar.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { MenuItems } from './shared/menu-items/menu-items';
import { DashboardRoutes } from './layouts/dashboard/dashboard.routing';
import { ProfileComponent } from './user/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { SubscribersComponent } from './pages/subscribers/subscribers.component';
import { SocialIconsComponent } from './pages/social-icons/social-icons.component';


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
    ForgetComponent,
    RegistrationComponent,
    HeaderbarComponent,
    DashboardComponent,
    ProfileComponent,
    ContactComponent,
    ContactListComponent,
    SubscribersComponent,
    SocialIconsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    RouterModule.forChild(DashboardRoutes),
    HttpModule,
    BrowserAnimationsModule,
  ],
  exports: [ScrollModule],
  providers: [AuthGuard, MenuItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
