import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* Componentes */
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/guest/header/header.component';
import { FooterComponent } from './components/guest/footer/footer.component';
import { BodyComponent } from './components/guest/body/body.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DashmenuComponent } from './components/costumer/dashmenu/dashmenu.component';
import { MenuconfigComponent } from './components/costumer/menuconfig/menuconfig.component';
import { NavdashComponent } from './components/costumer/navdash/navdash.component';
import { BookingComponent } from './components/costumer/booking/booking.component';
import { FindservicesComponent } from './components/costumer/findservices/findservices.component';
import { ServicesComponent } from './components/guest/services/services.component';

/* Servicios */
import { DataService } from './services/data.service';
import { AuthGuard } from './services/auth.guard';
import { TokenService } from './services/token.service';

/* Modulos */
import { AppRoutingModule } from './routes/app-routing.module';
import { BookingDComponent } from './components/costumer/booking-d/booking-d.component';
import { HomedashComponent } from './components/costumer/homedash/homedash.component';
import { ServiceconfigComponent } from './components/admin/serviceconfig/serviceconfig.component';
import { HistoryComponent } from './components/costumer/history/history.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    DashmenuComponent,
    MenuconfigComponent,
    NavdashComponent,
    BookingComponent,
    FindservicesComponent,
    ServicesComponent,
    BookingDComponent,
    HomedashComponent,
    ServiceconfigComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [DataService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenService,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
