import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { authGuard } from './service/auth.guard';
import { AddUserComponent } from './components/add-user/add-user.component';
import path from 'path';

export const routes: Routes = [{
    path:'login', component:LoginComponent,pathMatch:"full"},
    // {path:'home', component:FormComponentComponent, canActivate:[authGuard]}
    {path:'allUser',component:FormComponentComponent},
    {path:'addUser', component:AddUserComponent}
];
