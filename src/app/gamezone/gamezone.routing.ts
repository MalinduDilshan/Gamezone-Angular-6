import {Routes} from '@angular/router';

import {ComputerComponent} from './computer/computer.component';
import {MemberComponent} from './member/member.component';
import {UserComponent} from './user/user.component';
import {SettingComponent} from './setting/setting.component';
import {TerminalComponent} from './terminal/terminal.component';


export const gamezoneRoutes: Routes = [
  {
    path: 'terminal',
    component: TerminalComponent
  }, {
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
