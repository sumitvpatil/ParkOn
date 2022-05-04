import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { LogModel } from '../log-model';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isUser:boolean=true;
  public loginData=new LogModel("","");
  public msg1:string="1";
  public msg2:string="2";
  public message:string="";
  constructor(private _us:UserService,private _cs:CompanyService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    if(this.isUser==true){
      this._us.loginUser(this.loginData).subscribe(response=>{
        console.log(response);
        this.message=response.message;
        localStorage.setItem('token',response.token);
        localStorage.setItem('userId',response.user.id);
        localStorage.setItem('userName',response.user.name);
        this.router.navigate(['/userHome']);
      },err=>{
        console.log(err);
        this.message=err.error.message;
      })
    }
    else{
      this._cs.loginCompany(this.loginData).subscribe(response=>{
        console.log(response);
        this.message=response.message;
        localStorage.setItem('token',response.token);
        localStorage.setItem('companyId',response.company.id);
        localStorage.setItem('companyName',response.company.name);
        this.router.navigate(['/companyHome']);
      },err=>{
        console.log(err);
        this.message=err.error.message;
      })
  }
}

  onUser(){
    this.isUser=!this.isUser;
  }

  onCompany(){
    this.isUser=!this.isUser;
  }

}
