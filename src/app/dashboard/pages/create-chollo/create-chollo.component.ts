import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { dashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-create-chollo',
  templateUrl: './create-chollo.component.html',
  styleUrls: ['./create-chollo.component.css'] // Crea el archivo CSS si necesitas estilos personalizados
})
export class CreateCholloComponent {

  private fb = inject(FormBuilder);
  private dashboardService = inject(dashboardService);
  private router = inject(Router);

  public myForm: FormGroup = this.fb.group({
    titulo: ['', [ Validators.required ]],
    precio: ['', [ Validators.required ]],
    enlace: ['', [ Validators.required, Validators.minLength(6) ]],
    descripcion: ['', [ Validators.required, Validators.minLength(6) ]],
    images: ['', [ Validators.required, Validators.minLength(6) ]],
  });

  create() {
    const { titulo, precio, enlace, descripcion, images } = this.myForm.value;

    this.dashboardService.create(titulo, precio, enlace, descripcion, images)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      })
  }
}
