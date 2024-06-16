import { Component } from '@angular/core';
import { EventService } from 'app/services/event.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrl: './signupform.component.scss'
})
export class SignupformComponent {

  passwordFieldType: string = 'password';
  img: string = '../../../assets/ausblenden.png';
  showPassword: boolean = false;

  toggleType() {
    this.showPassword = !this.showPassword;
    this.passwordFieldType = this.showPassword ? 'text' : 'password';
    this.img = this.showPassword
      ? '../../../assets/icons/ausblenden.png'
      : '../../../assets/icons/aussicht.png';
  }

  constructor(public event:EventService) {}


  }




