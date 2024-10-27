import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStatus } from '../../auth/interfaces';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  private authService = inject(AuthService);
  private router = inject(Router);


  // Computed property para verificar si el usuario está autenticado
  public isAuthenticated = computed<boolean>(() => {
    return this.authService.authStatus() === AuthStatus.authenticated;
  });


  // Método para manejar la navegación según el estado de autenticación
  navigateBasedOnAuthStatus() {
    if (this.isAuthenticated()) {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.router.navigateByUrl('/auth/login');
    }
  }


  // Método de cierre de sesión
  onLogout() {
    this.router.navigateByUrl('/home'); // Redirige a /home después de cerrar sesión
    this.authService.logout();

  }


   // Redirige a la página de inicio
   goToHome() {
    this.router.navigateByUrl('/home');
  }

}
