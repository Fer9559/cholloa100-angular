import { Component, computed, effect, inject, Inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces/auth-status.enum';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
//prueba guardado

  public finishedAuthCheck = computed<boolean>( () => {
    console.log(this.authService.authStatus() )
    if ( this.authService.authStatus() === AuthStatus.checking) {
      return false;
    }

    return true;

  });


  public authStatusChangedEffect = effect( () => {

    const currentRoute = this.router.url;

    switch(this.authService.authStatus() ){

      case AuthStatus.checking:
        return;

      case AuthStatus.authenticated:

        if (currentRoute === '/auth/login' || currentRoute === '/auth/register'){
        this.router.navigateByUrl('/dashboard');
        }

        return;

      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login');
        return;
    }

  });
}
