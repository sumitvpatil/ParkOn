import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCar, faMagnifyingGlass, faSquareParking } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  public faCar=faCar;
  public faPark=faSquareParking;
  public faMag=faMagnifyingGlass;
  public location:string="";
  public name:any="User";
  constructor(private _router:Router) { }

  ngOnInit(): void {
    this.name=localStorage.getItem('userName');
  }

  onSubmit(){
    console.log(this.location);
  }

  onLogout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    this._router.navigate([""]);
  }
}
