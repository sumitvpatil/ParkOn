import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  public token:any;
  registerUser(user:any){
    return this._http.post<{message:string,user:any}>(environment.baseUrlUser+'/register',user);
  }

  loginUser(loginInfo:any){
    return this._http.post<{message:string,user:any,token:string}>(environment.baseUrlUser+'/login',loginInfo);
  }

  searchArea(key:any){
    this.token=localStorage.getItem('token');
    return this._http.get<{message:string,search_res:any}>(environment.baseUrlUser+'/searchArea/'+key,{
      headers:new HttpHeaders().set('x-token',this.token)
    });
  }
}
