import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../models/service/service';

@Injectable({
  providedIn: 'root'
})
export class ServicelabService {

  service: Service;
  services: Service[] = [];

  readonly URL_API = 'http://172.18.0.3:3000/api/lab/service';

  constructor(private http: HttpClient) {
    this.service = new Service();
  }

  getServices() {
    return this.http.get(this.URL_API);
  }

  postService(service:Service){
    return this.http.post(this.URL_API + `/post`, service);
  }

  putService(service:Service){
    return this.http.put(this.URL_API + `/put`, service)
  }

  deleteServices(service: Service){
    return this.http.delete(this.URL_API + `/delete/${service._id}`);
  }
}
