import { Injectable } from '@angular/core';
import { Login } from '../models/login.models';

@Injectable({
  providedIn: 'root'
})
export class UsuersService {

  private users: Login[]=[];
  

  constructor() {

    this.users.push({
      user: "sebastian",
      password: "123"
    });
    this.users.push({
        user: "miguel",
        password: "123"
    });
    this.users.push({
        user: "nayeli",
        password: "123"
      });
  
  }
   // Agrega un método para autenticar al usuario
  authenticate(username: string, password: string): boolean {
    const user = this.users.find(u => u.user === username && u.password === password);
    return user !== undefined;
  }

}
