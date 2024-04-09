import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.API_PATH}/user`);
  }

  public userSignUp(data:any) {
    return this.httpClient.post('http://localhost:3000/user', data)
  }

}



