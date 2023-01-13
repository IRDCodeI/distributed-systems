import { Component, OnInit } from '@angular/core';
import { ServicelabService } from 'src/app/services/servicelab.service';
import { Service } from 'src/app/models/service/service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-serviceconfig',
  templateUrl: './serviceconfig.component.html',
  styleUrls: ['./serviceconfig.component.css']
})
export class ServiceconfigComponent implements OnInit {

  serviceForm!: FormGroup;
  service: Service;
  _id: String = "";

  constructor
    (
    protected serviceLab: ServicelabService,
    private _builder: FormBuilder
    ) {
      this.service = new Service();
      this.serviceForm = this._builder.group({
        type: ['', Validators.required],
        scope: [''], //Validators.required
        subject: [''], //Validators.compose([Validator.email, Validators.required])
        desc: [''],
        urlimg: ['']
      })
  }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(){
    this.serviceLab.getServices().subscribe( res => {
      this.serviceLab.services = res as Service[];
      console.log(res);
    })
  }

  sendService(values: any){
    this.serviceLab.postService(values).subscribe(
      res => {
       console.log('Enviado');
       window.location.reload();
      },
      err => {
        console.log(err);
      }
      )
  }

  updateService(values: any){
    this.serviceLab.putService(values).subscribe(
      res => {
        console.log('Actualizado');
        window.location.reload();
      },
      err =>{
        console.log(err);
      }
    )
  }

  setValue(service: Service){
    this._id = service._id;
    this.serviceForm.setValue({
      type: service.type,
      scope: service.scope,
      subject: service.subject,
      desc: service.desc,
      urlimg: service.urlimg
    })
  }

  deleteService(service: Service){
    if(confirm('Eliminar Servicio')){
      this.serviceLab.deleteServices(service).subscribe( res => {
        console.log('Eliminado');
        window.location.reload();
      });
    }
  }

  resetForm(form?: NgForm) {
    this.serviceForm.setValue({
      type: '',
      scope: '',
      subject: '',
      desc:'',
      urlimg:''
    })
  }
}
