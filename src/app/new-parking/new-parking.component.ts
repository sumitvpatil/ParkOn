import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { CompanyService } from '../company.service';
import { ParkArea } from '../park-area';

@Component({
  selector: 'app-new-parking',
  templateUrl: './new-parking.component.html',
  styleUrls: ['./new-parking.component.css']
})
export class NewParkingComponent implements OnInit {
  public faLoc=faLocationPin;
  public companyId:any;
  constructor(private _cs:CompanyService,private router:Router) { }
  public area=new ParkArea("","","","","","","","0","","0","");
  ngOnInit(): void {
    this.companyId=localStorage.getItem('companyId');
    this.area.companyId=this.companyId;
  }

  onSubmit(){
    this._cs.saveArea(this.area).subscribe(response=>{
      console.log(response);
      this._cs.areaList.push(this.area);
      this._cs.btn1=true;
      this._cs.btn2=false;
    },
    err=>{
      console.log(err);
    })
  }
}
