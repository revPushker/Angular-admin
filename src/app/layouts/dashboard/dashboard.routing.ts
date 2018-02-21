import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from '../../user/profile/profile.component';
import { AuthguardService as AuthGuard } from '../../authguard.service';
import { ContactComponent } from '../../pages/contact/contact.component';

export const DashboardRoutes: Route[] = [
  {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        { path: 'profile', component: ProfileComponent },
        { path: 'contact', component: ContactComponent, /*canActivate: [AuthGuard]*/ },
      ]
  }
];
