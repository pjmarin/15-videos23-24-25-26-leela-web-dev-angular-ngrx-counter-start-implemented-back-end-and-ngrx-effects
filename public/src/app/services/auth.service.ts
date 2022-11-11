import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    console.log("email: ", email);
    console.log("password: ", password);
    return this.http.post(
      "http://localhost:5000/api/v1/auth/login",
      { email, password }
      // { email, password, returnSecureToken: true }
    );
  }
}