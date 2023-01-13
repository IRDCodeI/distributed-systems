import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user/users';
import { userstructure } from 'src/app/interfaces/userestruc';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  user: Users;
  constructor(protected dataService: DataService, private router: Router) {
    this.user = new Users();
  }

  ngOnInit(): void {
  }

  register(form: NgForm) {

    this.dataService.registerUser(form.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log(err);
      }
    )
    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.dataService.dataUser = new Users();
    }
  }

}
