import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { APIService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  userForm: FormGroup;
  addNewUser:any=[];
  constructor(private fb: FormBuilder, private http:APIService,public _route:Router) {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      middlename: [''],
      lastname: ['', Validators.required],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zip: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      this.addNewUser=this.userForm.value;
      this.http.addNewUser(this.addNewUser).subscribe((res)=>{
        console.log(res);
        if(res){
          this._route.navigate(['/allUser']);
        }
       

      })


    } else {
      console.log('Form is invalid');
    }
  }
  viewAllUser(){
    this._route.navigate(['/allUser']);

  }

}
