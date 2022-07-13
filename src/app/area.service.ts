import { Injectable } from '@angular/core';
import { ParkArea } from './park-area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  public area=new ParkArea("","","","","","","","0","","0","");
  constructor() { }
}
