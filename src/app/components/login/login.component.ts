import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginModel = {
    email: '',
    password: ''
  };

  registerModel = {
    name: '',
    email: '',
    password: ''
  };

  onLoginSubmit() {
    console.log('Login Data:', this.loginModel);
    // Add logic to handle login
  }

  onRegisterSubmit() {
    console.log('Registration Data:', this.registerModel);
    // Add logic to handle registration
  }
}
