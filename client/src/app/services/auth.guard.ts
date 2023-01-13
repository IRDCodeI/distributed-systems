import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dataservice:DataService, private router: Router){}

  canActivate(): boolean{
    if(this.dataservice.loggedIn()){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

 }

