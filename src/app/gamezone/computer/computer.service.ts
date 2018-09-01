import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(environment.computerUrl);
  }

  postData(computer) {
    return this.http.post(environment.computerUrl, computer);
  }

  putData(computer) {
    return this.http.put(environment.computerUrl, computer);
  }

  deleteData(computerId) {
    return this.http.delete(environment.computerUrl + '/' + computerId );
  }
}
