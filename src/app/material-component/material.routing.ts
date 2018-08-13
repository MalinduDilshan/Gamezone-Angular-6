import {Routes} from '@angular/router';

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
import {DialogComponent} from './dialog/dialog.component';
import {TooltipComponent} from './tooltip/tooltip.component';
import {SnackbarComponent} from './snackbar/snackbar.component';
import {SliderComponent} from './slider/slider.component';
import {SlideToggleComponent} from './slide-toggle/slide-toggle.component';
import {ComputerComponent} from './computer/computer.component';
import {MemberComponent} from './member/member.component';
import {UserComponent} from './user/user.component';
import {SettingComponent} from './setting/setting.component';


export const MaterialRoutes: Routes = [

  {
    path: 'button',
    component: ButtonsComponent
  }, {
    path: 'grid',
    component: GridComponent
  }, {
    path: 'lists',
    component: ListsComponent
  }, {
    path: 'menu',
    component: MenuComponent
  }, {
    path: 'tabs',
    component: TabsComponent
  }, {
    path: 'stepper',
    component: StepperComponent
  }, {
    path: 'expansion',
    component: ExpansionComponent
  }, {
    path: 'chips',
    component: ChipsComponent
  }, {
    path: 'toolbar',
    component: ToolbarComponent
  }, {
    path: 'progress-snipper',
    component: ProgressSnipperComponent
  }, {
    path: 'progress',
    component: ProgressComponent
  }, {
    path: 'dialog',
    component: DialogComponent
  }, {
    path: 'tooltip',
    component: TooltipComponent
  }, {
    path: 'snackbar',
    component: SnackbarComponent
  }, {
    path: 'slider',
    component: SliderComponent
  }, {
    path: 'slide-toggle',
    component: SlideToggleComponent
  },
  {
    path: 'computer',
    component: ComputerComponent
  }, {
    path: 'member',
    component: MemberComponent
  }, {
    path: 'user',
    component: UserComponent
  }, {
    path: 'setting',
    component: SettingComponent
  }
];
