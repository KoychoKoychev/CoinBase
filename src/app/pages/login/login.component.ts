import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') form!: NgForm

  errors: string = ''

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const data = {
      'username': this.form.value.username,
      'password': this.form.value.password,
    }
    this.authService.login(data).subscribe(
      response => {
        localStorage.setItem('accessToken', response.sessionToken);
        localStorage.setItem('userId', response.objectId);
        this.router.navigate(['/home'])
      },
      err => {
        this.form.setValue({
          'username': this.form.value.username,
          'password': '',
        })
        this.errors = err.error.error;
      }
    )
  }
}
