import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : any;

  constructor(private fb : FormBuilder, private _auth : AuthService){ 

  }

  login(){
    
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['', [
        Validators.email,
        Validators.required
      ]],
      password : ['', [
        Validators.required
      ]]
    });
  }

}
