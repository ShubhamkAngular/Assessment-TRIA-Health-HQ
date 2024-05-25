import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIService } from '../../service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit{
  loginSuccess:any=false;
  constructor(private http:APIService,public _route:Router){

  }
  ngOnInit(): void {
    
  }
  userName:string='';
  passWord:string='';

  

  submitData(){
    let body={
      "Username":this.userName,
      "Password":this.passWord
    }
     this.http.login(body);
     this.loginSuccess=this.http.login(body);
    localStorage.setItem('success',this.loginSuccess)
     if(this.loginSuccess==true){
    
      this._route.navigate(['/addUser']);

      
      
     }
     else {
      alert("Invalid Credentials")
      
     }
     

  }


}
