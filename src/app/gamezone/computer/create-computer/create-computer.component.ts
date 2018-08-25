import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Computer} from '../computer-bean/Computer';
import {ComputerService} from '../computer.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-create-computer',
  templateUrl: './create-computer.component.html',
  styleUrls: ['./create-computer.component.css']
})
export class CreateComputerComponent implements OnInit {

  private title: string;
  private editMode: boolean;
  private createMode: boolean;
  private computer: Computer;
  private response: any;

  constructor(private service: ComputerService,
              public dialogRef: MatDialogRef<CreateComputerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public createForm = new FormGroup({
    pcname: new FormControl(''),
    ipaddress: new FormControl('')
  });

  ngOnInit() {
    this.title = 'New Computer';
    this.editMode = false;
    this.createMode = true;
    this.computer = new Computer();
    this.setData();
  }

  setData() {
    if (this.data !== null) {
      this.title = 'Edit Computer';
      this.editMode = true;
      this.createMode = false;
      this.createForm.setValue({
        pcname: this.data.dataKey.computer_name,
        ipaddress: this.data.dataKey.ip_address
      });
    }
  }

  submit() {
    this.computer.computer_name = this.createForm.value.pcname;
    this.computer.ip_address = this.createForm.value.ipaddress;
    this.service.postData(this.computer).subscribe(result => {
      this.response = result;
      this.dialogRef.close(result);
    });
  }

}

