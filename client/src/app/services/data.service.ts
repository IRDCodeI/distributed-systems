import { Injectable } from '@angular/core';
//Servicios Angular
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
//Modelo
import { Users } from '../models/user/users';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataUser: Users;

  readonly URL_API = 'http://172.18.0.3:3000/api/lab';

  constructor(private http: HttpClient, private router: Router) {
    this.dataUser = new Users();
  }

  getUSer(email: string){
    return this.http.get<any>(this.URL_API + `/user/${email}`);
  }

  registerUser(User: Users) {
    User.typeUser = "cliente";
    return this.http.post<any>(this.URL_API + '/user/register', User);
  }

  loginUser(User: Users) {
    localStorage.setItem('email', User.email);
    return this.http.post<any>(this.URL_API + '/user/login', User);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }

  updateUser(User: Users) {
    return this.http.put(this.URL_API + '/user/dashboard/put', User);
  }
}
