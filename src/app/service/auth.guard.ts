import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let login_status=localStorage.getItem('success')
  if(login_status=='Successful operation'){
    return true;
  }else{
    return false;
  }
};
