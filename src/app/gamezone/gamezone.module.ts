import 'hammerjs';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {DemoMaterialModule} from '../demo-material-module';
import {CdkTableModule} from '@angular/cdk/table';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {ComputerComponent} from './computer/computer.component';
import {MemberComponent} from './member/member.component';
import {UserComponent} from './user/user.component';
import {SettingComponent} from './setting/setting.component';
import {ComputerService} from './computer/computer.service';
import {MatDialogModule} from '@angular/material';
import {CreateComputerComponent} from './computer/create-computer/create-computer.component';
import {gamezoneRoutes} from "./gamezone.routing";
import { TerminalComponent } from './terminal/terminal.component';
import { CreateTerminalComponent } from './terminal/create-terminal/create-terminal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(gamezoneRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    MatDialogModule
  ],
  providers: [
    ComputerService
  ],
  entryComponents: [
    CreateComputerComponent,
    CreateTerminalComponent
  ],
  declarations: [
    ComputerComponent,
    MemberComponent,
    UserComponent,
    SettingComponent,
    CreateComputerComponent,
    TerminalComponent,
    CreateTerminalComponent
  ]
})

export class GamezoneModule {
}
