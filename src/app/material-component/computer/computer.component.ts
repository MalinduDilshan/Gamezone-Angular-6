import {Component, OnInit} from '@angular/core';
import {ComputerService} from './computer.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CreateComputerComponent} from './create-computer/create-computer.component';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {
  computers: any;
  createComputer: MatDialogRef<CreateComputerComponent>

  constructor(private service: ComputerService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.service.getData().subscribe(result => {
      this.computers = result;
      console.log(this.computers);
    });
  }

  createModal() {
    this.createComputer = this.dialog.open(CreateComputerComponent);
  }

}
