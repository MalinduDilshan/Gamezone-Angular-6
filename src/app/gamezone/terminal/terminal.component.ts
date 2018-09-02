import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {CreateTerminalComponent} from './create-terminal/create-terminal.component';
import {ComputerService} from '../computer/computer.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  terminalDS: any;
  createTerminal: MatDialogRef<CreateTerminalComponent>
  displayedColumns: string[] = ['pcName', 'progressBar', 'timeLeft', 'status'];

  constructor(private computerService: ComputerService,
              private dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.computerService.getData().subscribe(result => {
      this.terminalDS = result;
    });
  }

  refresh() {
    this.changeDetectorRefs.detectChanges();
  }

  createModal() {
    this.createTerminal = this.dialog.open(CreateTerminalComponent);
    this.createTerminal.afterClosed().subscribe(result => {
      this.terminalDS.push(result);
    });
    this.refresh();
  }

  openDialog(row) {
    this.createTerminal = this.dialog.open(CreateTerminalComponent, {
      data: {
        dataKey: row
      }
    });
    this.createTerminal.afterClosed().subscribe(result => {
      this.terminalDS.push(result);
    });
    this.refresh();
  }

  addTerminal() {
    console.log('Add');
  }

  resetTerminal() {
    // this.createTerminal = this.dialog.open(CreateTerminalComponent);
    // this.createTerminal.afterClosed().subscribe(result => {
    //   this.terminalDS.push(result);
    // });
    // this.refresh();
  }

  shutdownComputers() {
    // this.createTerminal = this.dialog.open(CreateTerminalComponent);
    // this.createTerminal.afterClosed().subscribe(result => {
    //   this.terminalDS.push(result);
    // });
    // this.refresh();
  }

}
