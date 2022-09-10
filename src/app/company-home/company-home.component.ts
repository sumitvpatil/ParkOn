import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCar, faLocationPin, faParking, faPencil } from '@fortawesome/free-solid-svg-icons';
import { CompanyService } from '../company.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent implements OnInit {
  public faCar=faCar;
  public faPark=faParking;
  public faLoc=faLocationPin;
  public faLayer=faPencil;
  constructor(private _router:Router,public _cs:CompanyService, public _ls:LoaderService) { }
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
    this._cs.btn1=true;
    this._cs.btn2=false;
  }

  onNewParking(){
    this._cs.btn1=false;
    this._cs.btn2=true;
  }
}
