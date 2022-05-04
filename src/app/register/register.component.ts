import { Component, OnInit } from '@angular/core';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { CompanyService } from '../company.service';
import { RegModelCompany } from '../reg-model-company';
import { RegModelUser } from '../reg-model-user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faCar=faCar;
  public confPass:string="";
  public isUser:boolean=true;
  public user=new RegModelUser("","","","");
  public company=new RegModelCompany("","","","");
  public message:string="";
  public isError:boolean=false;
  constructor(private _us:UserService,private _cs:CompanyService) { }

  ngOnInit(): void {
  }
  onUser(){
    // console.log(1);
    this.isUser=!this.isUser;
  }
  onCompany(){
    // console.log(2);
    this.isUser=!this.isUser;
  }

  onRegister(){
    if(this.isUser){
      this._us.registerUser(this.user).subscribe(response=>{
        this.isError=false;
        console.log(response);
        this.message=response.message+". Login to get started!!";
      },err=>{
        this.isError=true;
        console.log(err);
        this.message=err.error.message;
      })
    }
    else{
      this._cs.registerCompany(this.company).subscribe(response=>{
        this.isError=false;
        console.log(response.company);
        this.message=response.message+". Login to get started!!";
      },err=>{
        this.isError=true;
        console.log(err);
        this.message=err.error.message;
      })
    }
  }
}
