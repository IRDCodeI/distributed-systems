import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-navdash',
  templateUrl: './navdash.component.html',
  styleUrls: ['./navdash.component.css']
})
export class NavdashComponent implements OnInit {

  constructor(protected dataService: DataService) {
   }

  ngOnInit(): void {
  }

}
