import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private _http:HttpClient) { }

  registerCompany(company:any){
    return this._http.post<{message:string,company:any}>(environment.baseUrlCompany+'/register',company);
  }

  loginCompany(loginInfo:any){
    return this._http.post<{message:string,company:any,token:string}>(environment.baseUrlCompany+'/login',loginInfo);
  }

  saveArea(area:any){
    return this._http.post<{message:string,area:any}>(environment.baseUrlCompany+'/saveArea',area);
  }

  getArea(){
    return this._http.get<{message:string,areaList:any}>(environment.baseUrlCompany+'/getAreabyId/'+localStorage.getItem('companyId'));
  }
}
