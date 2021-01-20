import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb : FormBuilder){ 

  }

  register(){
    console.log("Registering");
  }

  ngOnInit(): void {
  }

}
