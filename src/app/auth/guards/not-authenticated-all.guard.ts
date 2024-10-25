import type { CanActivateFn } from '@angular/router';



export const notAuthenticatedAllGuard: CanActivateFn = (route, state) => {



  return true;

};
