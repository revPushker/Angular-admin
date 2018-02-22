import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from '../../user/profile/profile.component';
import { AuthguardService as AuthGuard } from '../../authguard.service';
import { ContactComponent } from '../../pages/contact/contact.component';
import { ContactListComponent } from '../../pages/contact-list/contact-list.component';
import { SubscribersComponent } from '../../pages/subscribers/subscribers.component';
import { SocialIconsComponent } from '../../pages/social-icons/social-icons.component';

export const DashboardRoutes: Route[] = [
  {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
        { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
        { path: 'conatctlist', component: ContactListComponent, canActivate: [AuthGuard] },
        { path: 'subscribers', component: SubscribersComponent, canActivate: [AuthGuard] },
        { path: 'social-icons', component: SocialIconsComponent, canActivate:[AuthGuard] },
      ]
  }
];
