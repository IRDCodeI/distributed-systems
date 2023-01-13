import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Users } from 'src/app/models/user/users';

@Component({
  selector: 'app-menuconfig',
  templateUrl: './menuconfig.component.html',
  styleUrls: ['./menuconfig.component.css']
})
export class MenuconfigComponent implements OnInit {

  user:Users;

  constructor(private dataService: DataService) {
    this.user = new Users();
  }

  ngOnInit(): void {
  }

  updateUser(){
    this.dataService.updateUser(this.user).subscribe(res => {
      console.log(res);
    });
  }

  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.dataService.dataUser = new Users();
    }
  }

  refresh(): void{
    window.location.reload();
  }

}
