import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {TerminalService} from './terminal.service';
import {CreateTerminalComponent} from './create-terminal/create-terminal.component';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  terminalDS: any;
  createTerminal: MatDialogRef<CreateTerminalComponent>
  displayedColumns: string[] = ['pcName', 'progressBar', 'timeLeft', 'status'];

  constructor(private service: TerminalService,
              private dialog: MatDialog,
              private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  refresh() {
    this.changeDetectorRefs.detectChanges();
  }

  addTerminal() {
    this.createTerminal = this.dialog.open(CreateTerminalComponent);
    this.createTerminal.afterClosed().subscribe(result => {
      this.terminalDS.push(result);
    });
    this.refresh();
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
