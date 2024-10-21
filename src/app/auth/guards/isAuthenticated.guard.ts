import type { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';
import { Router } from '@angular/router';


export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Access the current value of the signal
  if (authService.authStatus() === AuthStatus.authenticated) {
    return true;
  }

  if(authService.authStatus() === AuthStatus.checking){
    return false;
  }


  router.navigateByUrl('/auth/login');
  return false; // Prevent route activation

};
