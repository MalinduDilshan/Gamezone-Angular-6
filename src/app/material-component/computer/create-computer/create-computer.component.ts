import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Computer} from '../computer-bean/Computer';
import {ComputerService} from '../computer.service';

@Component({
  selector: 'app-create-computer',
  templateUrl: './create-computer.component.html',
  styleUrls: ['./create-computer.component.css']
})
export class CreateComputerComponent implements OnInit {

  private computer: Computer;
  private response: any;

  constructor(private service: ComputerService) {
  }

  public createForm = new FormGroup({
    pcname: new FormControl(''),
    ipaddress: new FormControl('')
  });

  ngOnInit() {
    this.computer = new Computer();
  }

  submit() {
    this.computer.computer_name = this.createForm.value.pcname;
    this.computer.ip_address = this.createForm.value.ipaddress;
    this.service.postData(this.computer).subscribe(result => {
      this.response = result;
    });
  }

}
