import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from '../../user/profile/profile.component';
import { AuthguardService as AuthGuard } from '../../authguard.service';

export const DashboardRoutes: Route[] = [
  {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
          { path: 'profile', component: ProfileComponent },
          // { path: 'security', component: SecurityComponent, canActivate: [AuthGuard] },
          // { path: 'referral', component: ReferralComponent, canActivate: [AuthGuard] },
          // { path: 'ico', component: IcoDetailsComponent, canActivate: [AuthGuard] },
          // { path: '', component: WalletComponent, canActivate: [AuthGuard] },
      ]
  }
];
