import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCar, faLocationPin, faParking, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent implements OnInit {
  public faCar=faCar;
  public btn1:boolean=false;
  public btn2:boolean=false;
  public faPark=faParking;
  public faLoc=faLocationPin;
  public faLayer=faPencil;
  constructor(private _router:Router) { }
  public name:any="Company"

  ngOnInit(): void {
    this.name=localStorage.getItem('companyName');
  }

  onLogout(){
    localStorage.removeItem('companyName');
    localStorage.removeItem('companyId');
    localStorage.removeItem('token');
    this._router.navigate([""]);
  }

  onMyParking(){
    this.btn1=true;
    this.btn2=false;
  }

  onNewParking(){
    this.btn1=false;
    this.btn2=true;
  }
}
