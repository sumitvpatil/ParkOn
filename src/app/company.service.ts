import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public token:any;
  constructor(private _http:HttpClient) { }

  registerCompany(company:any){
    return this._http.post<{message:string,company:any}>(environment.baseUrlCompany+'/register',company);
  }

  loginCompany(loginInfo:any){
    return this._http.post<{message:string,company:any,token:string}>(environment.baseUrlCompany+'/login',loginInfo,{headers:new HttpHeaders().set('x-token',this.token)});
  }

  saveArea(area:any){
    this.token=localStorage.getItem('token');
    return this._http.post<{message:string,area:any}>(environment.baseUrlCompany+'/saveArea',area,{headers:new HttpHeaders().set('x-token',this.token)});
  }

  getArea(){
    this.token=localStorage.getItem('token');
    return this._http.get<{message:string,areaList:any}>(environment.baseUrlCompany+'/getAreabyId/'+localStorage.getItem('companyId'),{headers:new HttpHeaders().set('x-token',this.token)});
  }

  updateArea(area:any){
    this.token=localStorage.getItem('token');
    return this._http.put<{message:String,newArea:any}>(environment.baseUrlCompany+'/updateArea/'+area._id,area,{headers:new HttpHeaders().set('x-token',this.token)});
  }

  deleteArea(area:any){
    this.token=localStorage.getItem('token');
    return this._http.delete<{message:String,deletedArea:any}>(environment.baseUrlCompany+'/deleteArea/'+area._id);
  }
}
