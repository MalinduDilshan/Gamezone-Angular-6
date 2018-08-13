import { Component, OnInit } from '@angular/core';
import {ComputerService} from './computer.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  computers: any;
  constructor(private service: ComputerService) { }

  ngOnInit() {
    this.service.getData().subscribe(result => {
      this.computers = result;
      console.log(this.computers);
    });
  }

}
