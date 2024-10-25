import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroments';
import { ListAllChollos } from '../interfaces/list-all-chollos.interface';
import { Observable, catchError, map, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  private readonly baseUrl: string = enviroment.baseUrl;
  private http = inject( HttpClient );

  constructor() { }

  getAllChollos(): Observable<any> {

    return this.http.get<ListAllChollos>(`${this.baseUrl}/chollos/list-all`);
  }


  getCholloByTitle(name: string): Observable<ListAllChollos[]> {
    return this.http.get<ListAllChollos[]>(`${this.baseUrl}/chollos/filter-by-title/${name}`);
  }

}
