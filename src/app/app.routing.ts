import {Routes} from '@angular/router';

import {FullComponent} from './layouts/full/full.component';

export const AppRoutes: Routes = [{
  path: '',
  component: FullComponent,
  children: [{
    path: '',
    redirectTo: '/terminal',
    pathMatch: 'full'
  },
    {
      path: '',
      loadChildren: './gamezone/gamezone.module#GamezoneModule'
    }]
}];

