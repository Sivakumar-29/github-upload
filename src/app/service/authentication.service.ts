import { Injectable } from '@angular/core';

import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _users: User[];

  constructor(private _http: HttpClient) { 
    _http.get('assets/mock/users.json').subscribe(
      (users: User[]) => {
        this._users = users;
      }
    )
  }

  public authenticate(username: string, password: string): User {
    return this._users.filter(usr => usr.username === username && usr.password === password)[0];
  }

  public verifyPolicyNumber(policyNumber: string): User {
    return this._users.filter(usr => usr.policyNumber === policyNumber)[0];
  }
}
