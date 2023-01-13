import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Users } from 'src/app/models/user/users';

@Component({
  selector: 'app-dashmenu',
  templateUrl: './dashmenu.component.html',
  styleUrls: ['./dashmenu.component.css']
})
export class DashmenuComponent implements OnInit {

  user: Users;
  username: any = "";
  typeUser: string = "";
  email: any;

  constructor(protected dataService: DataService) {
    this.user = new Users();
  }

  ngOnInit(): void {
    this.loadInfoUser();
  }

  loadInfoUser(){
    this.email = localStorage.getItem('email');
    this.dataService.getUSer(this.email).subscribe( res =>{
      this.user = res as Users;
      this.username = res.username;
      this.typeUser = res.typeUser;
    })
  }

}
