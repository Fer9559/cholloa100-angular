/*import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtenemos el token desde el servicio de autenticación
    const token = localStorage.getItem('token'); // O puedes obtenerlo usando el AuthService

    // Si el token existe, clonamos la solicitud y añadimos el encabezado Authorization
    if (token) {
      const authReq = req.clone({
        headers: req.headers.set (
          'authorization', `Bearer ${token}`
        ),
      });
      return next.handle(authReq);
    }

    // Si no hay token, continuamos con la solicitud original
    return next.handle(req);
  }
}*/
