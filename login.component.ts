import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm= new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)])
  });

  loginSubmitted(){
    
    }

  get Email(): FormControl{
    return this.loginForm.get('email') as FormControl;
  }

  get PWD(): FormControl{
    return this.loginForm.get('pwd') as FormControl;
  }
}
