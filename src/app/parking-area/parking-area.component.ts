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
  public area=new ParkArea("","","","","","","","0","","0","");
  faCar=faCar;
  public name:any="Company"
  constructor(private _router:Router,public _as:AreaService,private _cs:CompanyService) { }

  ngOnInit(): void {
    this.name=localStorage.getItem('companyName');
    this.area=this._as.area;
    console.log(this.area);
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
    },err=>{
      console.log(err);
    })
    this._router.navigate(['/companyHome']).then(()=>{
      window.location.reload();
    });
  }
  
  onDelete(){
    this._cs.deleteArea(this.area).subscribe(response=>{
      console.log(response);
    },err=>{
      console.log(err);
    })
    this._router.navigate(['/companyHome']).then(()=>{
      window.location.reload();
    });
  }
}
