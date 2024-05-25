import { Component, OnInit } from '@angular/core';
import { APIService } from '../../service/api.service';
import { NgFor } from '@angular/common';
import {Validators,ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [NgFor,ReactiveFormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})
export class FormComponentComponent implements OnInit {
  editUserForm:FormGroup;
  editExistingUser:any;
  existingUserData:any;
  specificUserData:any=[];
  constructor( public http:APIService,private fb: FormBuilder){
    this.editUserForm = this.fb.group({
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
  userData:any;
  ngOnInit(): void {
    this.getAllUserInfo()
  }

  getAllUserInfo(){
    this.http.getllUser().subscribe((res:any)=>{
     
      this.userData=res;
      console.log(this.userData);
      
    })

  }
  editInfo(data:any){
    console.log(data);
    this.existingUserData=data;
    console.log(this.existingUserData);
    this.http.getSpecificUser(this.existingUserData?.id).subscribe((res)=>{
     
      this.specificUserData=res;
      console.log(this.specificUserData);
      this.editUserForm = this.fb.group({
        
        firstname: [this.specificUserData?.firstname || ''],
        middlename: [this.specificUserData?.middlename || ''],
        lastname: [this.specificUserData?.lastname || ''],
        gender: [this.specificUserData?.gender || ''],
        birthdate: [this.specificUserData?.birthdate || ''],
        city: [this.specificUserData?.city || ''],
        state: [this.specificUserData?.state || ''],
        country: [this.specificUserData?.country || ''],
        zip: [this.specificUserData?.zip || ''],
        id:[this.specificUserData?.id || '']
      });
    })

  }
  onSubmit(): void {
   
      console.log('Form Submitted', this.editUserForm.value);
      this.editExistingUser=this.editUserForm.value;
      console.log(this.editExistingUser);
      this.http.editExistingUser(this.editExistingUser).subscribe((res)=>{
        console.log(res);
        if(res){
          this.getAllUserInfo()
        }
       
       

      })


    
  }



  

}
