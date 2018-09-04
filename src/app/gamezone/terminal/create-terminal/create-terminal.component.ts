import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TerminalService} from '../terminal.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Terminal} from '../terminal-bean/Terminal';

@Component({
  selector: 'app-create-terminal',
  templateUrl: './create-terminal.component.html',
  styleUrls: ['./create-terminal.component.css']
})
export class CreateTerminalComponent implements OnInit {

  private title: string;
  private terminal: Terminal;
  private createMode: boolean;
  private editMode: boolean;
  private response: any;

  constructor(private service: TerminalService,
              private dialogRef: MatDialogRef<CreateTerminalComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
  }

  public createForm = new FormGroup({
    pcName: new FormControl(''),
    leftTime: new FormControl(''),
    status: new FormControl('')
  });

  ngOnInit() {
    this.createMode = true;
    if (this.data.dataKey.terminal.progressValue !== 0) {
      this.title = 'Update Terminal ' + this.data.dataKey.computerName;
      this.editMode = true;
      this.createMode = false;
    } else {
      this.title = 'New Terminal ' + this.data.dataKey.computerName;
      this.editMode = false;
    }
    this.terminal = new Terminal();
    this.setData();
  }

  setData() {
    if (this.data !== null) {
      this.createForm.setValue({
        pcName: this.data.dataKey.computerName,
        leftTime: this.data.dataKey.terminal.leftTime,
        status: this.data.dataKey.terminal.status
      });
      this.terminal.primaryKey = this.data.dataKey.terminal.primaryKey;
      console.log(this.data.dataKey.computerName);
    }
  }

  createTerminal() {

  }

  updateTerminal() {

  }
}
