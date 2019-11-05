import { Injectable } from '@angular/core';
import {Owner} from './Owner';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {environment} from '../../../environments/environment';

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
  apiUrl = environment.apiUrl + '/owners';
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {}

  getOwners(): Observable<Owner[]> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Owner[]>(this.apiUrl, httpOptions);
  }
  addOwner(owner: Owner): Observable<Owner> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<Owner>(this.apiUrl, owner, httpOptions);
  }
  updateOwner(owner: Owner): Observable<Owner> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.put<Owner>(this.apiUrl + '/' + owner.id, owner, httpOptions);
  }
  getOwnerById(id: number): Observable<Owner> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get<Owner>(this.apiUrl + '/' + id, httpOptions);
  }
  deleteOwner(id: number): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.delete(this.apiUrl + '/' + id, httpOptions);
  }
}
