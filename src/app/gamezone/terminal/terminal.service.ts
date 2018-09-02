import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(environment.terminalUrl);
  }

  putData(terminal) {
    return this.http.put(environment.terminalUrl, terminal);
  }
}
