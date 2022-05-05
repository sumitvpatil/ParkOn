import { Component, OnInit } from '@angular/core';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { ParkArea } from '../park-area';

@Component({
  selector: 'app-new-parking',
  templateUrl: './new-parking.component.html',
  styleUrls: ['./new-parking.component.css']
})
export class NewParkingComponent implements OnInit {
  public faLoc=faLocationPin;
  constructor() { }
  public area=new ParkArea("","","","","","");
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.area);
  }
}
