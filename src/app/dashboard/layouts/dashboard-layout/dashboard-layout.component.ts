import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { LoginResponse } from '../../../auth/interfaces';
import { dashboardService } from '../../services/dashboard.service';
import { Router } from '@angular/router';
import { ListChollos } from '../../interfaces/list-chollo.interface';

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




  chollos: any[] = []; // Array para almacenar los chollos
  userId: string = ""; // ID del usuario

  //constructor(private dashboardService: dashboardService, private authService: AuthService, private router: Router) {}
  private dashboardService = inject(dashboardService);
  //private authService = inject(dashboardService);
  private router = inject(Router);

  ngOnInit(): void {
    this.userId = this.authService.getUserId(); // Obtener ID del usuario autenticado desde el servicio de autenticación
    console.log('id de usurario logueado: ', this.userId);
    this.getListUserChollos(this.userId);
    //this.getUserChollos(this.userId);
  }

  // Método para obtener los chollos del usuario
  getListUserChollos(userId: string): void {


    this.dashboardService.getUserChollos(userId).subscribe(
      (data) => {
        this.chollos = data; // Almacenar los chollos en el array
      },
      (error) => {
        console.error('Error al obtener los chollos:', error);
        // Aquí puedes manejar errores, por ejemplo, mostrar un mensaje al usuario
      }
    );
  }


  onUpdateChollo(id_chollo: string) {
    // Redirigir a la página de actualización con el ID del chollo
    this.router.navigate(['/dashboard/update', id_chollo]);
  }

  }

//}
