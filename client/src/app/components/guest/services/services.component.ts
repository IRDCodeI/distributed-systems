import { Component, OnInit } from '@angular/core';
import { ServicelabService } from 'src/app/services/servicelab.service';
import { Service } from 'src/app/models/service/service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(protected serviceLab: ServicelabService) { }

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(){
    this.serviceLab.getServices().subscribe( res => {
      this.serviceLab.services = res as Service[];
      console.log(res);
    })
  }

}
