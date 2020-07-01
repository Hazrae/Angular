import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  userForm : FormGroup;
  submited: boolean = false; 

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    
  }
  
  // convenience getter

  get f() {return this.userForm.controls;}


  // init form + validators
  initForm(){
    this.userForm = this.formBuilder.group(
      {
        login : ['',Validators.required],
        password : ['',Validators.required,],
        birthdate : ['',Validators.required],
        mail : ['', [Validators.required, Validators.email]]
    })
  }

  // submit, recup values

  onSubmitForm(){
    this.submited = true;

        // stop here if form is invalid
        if (this.userForm.invalid) {
            return;
        }

        alert('SUCCES!' + JSON.stringify(this.userForm.value,null,4));
    /*const formValue = this.userForm.value;
    const newUser = new User(
      formValue['login'],
      formValue['password'],
      formValue['mail'],
      formValue['birthdate']
    );
    console.log(newUser.login + ' '+newUser.password + ' '+newUser.email + ' '+newUser.birthdate);*/
  }

  onResetForm(){
    this.submited = false;
    this.userForm.reset();   
  }

}
