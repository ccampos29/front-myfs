import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private router = inject(Router);
  private loginService = inject(LoginService);

  logOut() {
    this.loginService.setLoggedIn(false);
    if(sessionStorage.getItem('userSession')) {
      sessionStorage.removeItem('userSession');
    }
    if(sessionStorage.getItem('idToken')) {
      sessionStorage.removeItem('idToken');
    }
    if(sessionStorage.getItem('access_token')) {
      sessionStorage.removeItem('access_token');
    }
    this.router.navigate(['login']);
  }
 
}
