import { Injectable } from '@angular/core';
import {Owner} from './Owner';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../../shared/services/authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  apiUrl = 'https://peetshopar.azurewebsites.net/api/owners';
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {}

  getOwners(): Observable<Owner[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer' + this.authenticationService.getToken());
    return this.http.get<Owner[]>(this.apiUrl);
  }
  addOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.apiUrl, owner);
  }
  updateOwner(owner: Owner): Observable<Owner> {
    return this.http.put<Owner>(this.apiUrl + '/' + owner.id, owner);
  }
  getOwnerById(id: number): Observable<Owner> {
    return this.http.get<Owner>(this.apiUrl + '/' + id);
  }
  deleteOwner(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
