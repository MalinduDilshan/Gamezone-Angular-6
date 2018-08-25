import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ComputerService} from './computer.service';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CreateComputerComponent} from './create-computer/create-computer.component';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})

export class ComputerComponent implements OnInit {
  computersDS: any;
  createComputer: MatDialogRef<CreateComputerComponent>
  displayedColumns: string[] = ['pcName', 'ipAddress'];

  constructor(private service: ComputerService,
              private dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.service.getData().subscribe(result => {
      this.computersDS = result;
    });
  }

  refresh() {
    this.changeDetectorRefs.detectChanges();
  }

  createModal() {
    this.createComputer = this.dialog.open(CreateComputerComponent);
    this.createComputer.afterClosed().subscribe(result => {
      this.computersDS.push(result);
    });
    this.refresh();
  }

  openDialog(row) {
    this.createComputer = this.dialog.open(CreateComputerComponent, {
      data: {
        dataKey: row
      }
    });
    this.createComputer.afterClosed().subscribe(result => {
      this.computersDS.push(result);
    });
    this.refresh();
  }

}
