import type { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject, Signal } from '@angular/core';
import { AuthStatus } from '../interfaces';
import { Router } from '@angular/router';


export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
/*
  const authService = inject(AuthService);
  const router = inject(Router);
  const authStatus = toSignal(authService.authStatus);

  if ( authStatus === AuthStatus.authenticated) {
    return true;
  }

  router.navigateByUrl('/auth/login');*/
  return true;
};
