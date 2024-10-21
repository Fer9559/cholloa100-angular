import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { LoginResponse } from '../../../auth/interfaces';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

  private authService = inject(AuthService);

  public user = computed( () => this.authService.currentUser());

  onLogout(){
    this.authService.logout();
  }

  /*  get userName(): string {
    const currentUser = this.user();
    return currentUser.fullName;*/
  }

//}
