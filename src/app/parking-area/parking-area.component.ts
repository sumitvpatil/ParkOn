import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { AreaService } from '../area.service';
import { CompanyService } from '../company.service';
import { ParkArea } from '../park-area';

@Component({
  selector: 'app-parking-area',
  templateUrl: './parking-area.component.html',
  styleUrls: ['./parking-area.component.css']
})
export class ParkingAreaComponent implements OnInit {
  public area:any;
  faCar=faCar;
  public name:any="Company"
  constructor(private _router:Router,public _as:AreaService,private _cs:CompanyService) { }

  ngOnInit(): void {
    this.name=localStorage.getItem('companyName');
    this.area=this._as.area;
  }

  onLogout(){
    localStorage.removeItem('companyName');
    localStorage.removeItem('companyId');
    localStorage.removeItem('token');
    this._router.navigate([""]);
  }
  onSave(){
    this._cs.updateArea(this.area).subscribe(response=>{
      console.log(response);
      for(var i=0;i<this._cs.areaList.length;i++){
        if(this._cs.areaList[i]._id==this.area._id){
          this._cs.areaList[i]=this.area;
          break;
        }
      }
    },err=>{
      console.log(err);
    })
    this._router.navigate(['/companyHome']);
  }
  
  onDelete(){
    var pos=-1;
    for(var i=0;i<this._cs.areaList.length;i++){
      if(this._cs.areaList[i]._id==this.area._id){
        pos=i;
        break;
      }
    }
    if(pos!=-1){
      this._cs.areaList.splice(pos,1);
    }
    this._cs.deleteArea(this.area).subscribe(response=>{
      console.log(response);
      console.log(this._cs.areaList);
    },err=>{
      console.log(err);
    })
    this._router.navigate(['/companyHome']);
  }
}
