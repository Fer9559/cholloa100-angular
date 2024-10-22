import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { enviroment } from "../../../enviroments/enviroments";
import { Observable, catchError, map, throwError } from "rxjs";
import { CreateChollo } from "../interfaces/create-chollo.interface";




@Injectable({
  providedIn: 'root'
})
export class dashboardService {

private readonly baseUrl: string = enviroment.baseUrl;
private http = inject( HttpClient );

constructor() {}


create( titulo: string, precio: number, enlace: string, descripcion: string, images: string[]): Observable<Boolean>{

  const url = `${ this.baseUrl }/chollos/create`;
  const body = { titulo, precio, enlace, descripcion, images };

  return this.http.post<CreateChollo>(url, body).pipe(
    map(response => !!response.id_chollo), // Retorna true si hay un id_chollo
    catchError(err => throwError(() => new Error(err.error.message || 'Error creating chollo')))
  );
}
}
