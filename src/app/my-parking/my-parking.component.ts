import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-my-parking',
  templateUrl: './my-parking.component.html',
  styleUrls: ['./my-parking.component.css']
})
export class MyParkingComponent implements OnInit {
  constructor(public _cs:CompanyService) { }

  ngOnInit(): void {
    this._cs.getArea().subscribe(response=>{
      this._cs.areaList=response.areaList;
    },err=>{
      console.log(err);
    })
  }
}
