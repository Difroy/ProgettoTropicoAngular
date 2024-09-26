import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})



export class LoginComponent {



user: User = 
{
  id: 0,
  email: '',
  password: ''
  guest:true,
  nickname: ''
};




onSubmit(){


  console.log('User Login:', this.user.email);
 
}



  
}
