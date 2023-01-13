import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceconfigComponent } from '../components/admin/serviceconfig/serviceconfig.component';
import { BookingDComponent } from '../components/costumer/booking-d/booking-d.component';
import { BookingComponent } from '../components/costumer/booking/booking.component';
import { FindservicesComponent } from '../components/costumer/findservices/findservices.component';
import { HistoryComponent } from '../components/costumer/history/history.component';
import { MenuconfigComponent } from '../components/costumer/menuconfig/menuconfig.component';
import { ServicesComponent } from '../components/guest/services/services.component';
import { AuthGuard } from '../services/auth.guard';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';

const router:Routes = [
  {path: '', component:HomeComponent}, //redirectTo, pathMatch
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/service', component: FindservicesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'dashboard/lab-reservation', component:BookingComponent},
  {path: 'dashboard/device-reservation', component:BookingDComponent},
  {path: 'dashboard/configuration', component:MenuconfigComponent},
  {path: 'dashboard/admin-services', component:ServiceconfigComponent},
  {path: 'dashboard/history', component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
