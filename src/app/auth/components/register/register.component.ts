import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm : any;

  constructor(private fb : FormBuilder){ 

  }

  register(){
    console.log("Registering");
  }

  ngOnInit(): void {

    this.registrationForm = this.fb.group({
      email : [
        '', [
          Validators.required,
          Validators.email
        ]
      ],
      password : [
        '', [
          Validators.required
        ]
      ],
      password_confirm : [
        '', [

        ]
      ]
    })
  }

}
