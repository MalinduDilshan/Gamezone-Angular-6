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
              private dialogRef: MatDialogRef<CreateComputerComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
  }

  public createForm = new FormGroup({
    pcName: new FormControl(''),
    ipAddress: new FormControl('')
  });

  ngOnInit() {
    this.title = 'New Computer';
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
        pcName: this.data.dataKey.computerName,
        ipAddress: this.data.dataKey.ipAddress
      });
      this.computer.primaryKey = this.data.dataKey.primaryKey;
    }
  }

  createComputer() {
    this.computer.computerName = this.createForm.value.pcName;
    this.computer.ipAddress = this.createForm.value.ipAddress;
    this.service.postData(this.computer).subscribe(result => {
      this.response = result;
      this.dialogRef.close(result);
    });
  }

  editComputer() {
    this.computer.computerName = this.createForm.value.pcName;
    this.computer.ipAddress = this.createForm.value.ipAddress;
    this.service.putData(this.computer).subscribe(result => {
      this.response = result;
      this.dialogRef.close(result);
    });
  }

  deleteComputer() {
    this.service.deleteData(this.computer.primaryKey).subscribe(result => {
      this.response = result;
      this.dialogRef.close(result);
    });
  }

}

