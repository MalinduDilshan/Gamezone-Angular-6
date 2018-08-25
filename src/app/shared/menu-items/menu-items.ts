import {Injectable} from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  {state: 'terminal', type: 'link', name: 'Terminals', icon: 'explore'},
  {state: 'computer', type: 'link', name: 'Computers', icon: 'computer'},
  {state: 'member', type: 'link', name: 'Members', icon: 'people'},
  {state: 'user', type: 'link', name: 'Users', icon: 'face'},
  {state: 'setting', type: 'link', name: 'Settings', icon: 'settings'},
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
