import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces/auth-status.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  public finishedAuthCheck = computed<boolean>(() => {
    return this.authService.authStatus() !== AuthStatus.checking;
  });

  public authStatusChangedEffect = effect(() => {
    const currentRoute = this.router.url;

    switch (this.authService.authStatus()) {
      case AuthStatus.checking:
        return;

      case AuthStatus.authenticated:
        // Redirige a '/dashboard' si intenta acceder a una ruta de autenticación
        if (currentRoute === '/auth/login' || currentRoute === '/auth/register') {
          this.router.navigateByUrl('/dashboard');
        }
        return;

      case AuthStatus.notAuthenticated:
        // Redirige a '/auth/login' si intenta acceder a '/dashboard' o sus rutas hijas
        if (currentRoute.startsWith('/dashboard')) {
          this.router.navigateByUrl('/auth/login');
        }
        return;
    }
  });
}
