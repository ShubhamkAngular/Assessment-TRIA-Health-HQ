import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(public http: HttpClient) {}
  staticUserName:string='';
  staticPassword:string='';

 baseUrl="https://devservices.qpathways.com/otc/test/"
 getllUser() {
  var tempurl = `${this.baseUrl}` + `user`;
  return this.http.get(tempurl);
}
addNewUser(data:any){
  var tempurl = `${this.baseUrl}` + `user/save`;
  return this.http.post(tempurl,data);

}
getSpecificUser(data:any){
  console.log(data);
var tempurl=`${this.baseUrl}` + `user/${data}`;
  return this.http.get(tempurl);
}
editExistingUser(data:any){
  var tempurl=`${this.baseUrl}` + `user/update`;
  return this.http.put(tempurl,data);
}
  login(data:any){
    this.staticUserName="ShubhamK";
    this.staticPassword="Tgc@1234";
    console.log(data);
    if(data.Username==this.staticUserName && data.Password ==this.staticPassword){
      return true;

    }
    else {
      
      return false;
    }

   



      
  }
 
 
  
}

