import 'hammerjs';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {DemoMaterialModule} from '../demo-material-module';
import {CdkTableModule} from '@angular/cdk/table';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MaterialRoutes} from './material.routing';
import {ButtonsComponent} from './buttons/buttons.component';

import {GridComponent} from './grid/grid.component';
import {ListsComponent} from './lists/lists.component';
import {MenuComponent} from './menu/menu.component';
import {TabsComponent} from './tabs/tabs.component';
import {StepperComponent} from './stepper/stepper.component';
import {ExpansionComponent} from './expansion/expansion.component';
import {ChipsComponent} from './chips/chips.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ProgressSnipperComponent} from './progress-snipper/progress-snipper.component';
import {ProgressComponent} from './progress/progress.component';
import {DialogComponent, DialogOverviewExampleDialog} from './dialog/dialog.component';
import {TooltipComponent} from './tooltip/tooltip.component';
import {SnackbarComponent} from './snackbar/snackbar.component';
import {SliderComponent} from './slider/slider.component';
import {SlideToggleComponent} from './slide-toggle/slide-toggle.component';
import {ComputerComponent} from './computer/computer.component';
import {MemberComponent} from './member/member.component';
import {UserComponent} from './user/user.component';
import {SettingComponent} from './setting/setting.component';
import {ComputerService} from './computer/computer.service';
import {MatDialogModule} from '@angular/material';
import {CreateComputerComponent} from './computer/create-computer/create-computer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
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
    DialogOverviewExampleDialog,
    CreateComputerComponent
  ],
  declarations: [
    ButtonsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialog,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    ComputerComponent,
    MemberComponent,
    UserComponent,
    SettingComponent,
    CreateComputerComponent
  ]
})

export class MaterialComponentsModule {
}
