import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User1 } from '../modals/User1';
import { AuthenticateService } from '../services/authenticate.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public result;
  private user = new User1();
  loginForm: FormGroup;

  constructor(private authenticateService: AuthenticateService, private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
        // this.authenticateService.login(this.user)
    // .subscribe(data=>this.result=data);
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  loginUser() {
    this.user.username = this.loginForm.get('username').value;
    this.user.password = this.loginForm.get('password').value;
    console.log(this.user)
    this.authenticateService.login(this.user)
      .subscribe(data => {
        let id = data.id;
        if(data.designation == 'supplier') {
          this.router.navigate(['/supplier'], {queryParams : {id: id}});
        }
        else if (data.designation='designer'){
          this.router.navigate(['/designer'], {queryParams : {id: id}});
        }
       else{
          this.router.navigate(['/manufacturer'], {queryParams : {id: id}});
        }
      },
      error => {
        console.log(error);
      });
  }
  logout(){
    this.router.navigate(['/LogOut']);
  }
}
