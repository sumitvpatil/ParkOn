import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCar, faMagnifyingGlass, faSquareParking } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from '../loader/loader.service';
import { UserService } from '../user.service';

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
  public search_res:any[]=[]
  public search_box:boolean=true;
  public no_res:boolean=false;
  constructor(private _router:Router,private _us:UserService, public _ls:LoaderService) { }

  ngOnInit(): void {
    this.name=localStorage.getItem('userName');
  }

  onSubmit(){
    this._us.searchArea(this.location).subscribe(response=>{
      this.search_res=response.search_res;
      console.log(this.search_res);
      this.no_res=false;
      this.search_box=false;
    },
    err=>{
      this.search_box=false;
      this.no_res=true;
      console.log(err);
    })
  }

  onLogout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    this._router.navigate([""]);
  }
}
