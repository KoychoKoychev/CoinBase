import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  isAdmin: boolean = false;
  appComments: any = [];
  formSubmitted: boolean = false;
  @ViewChild('contactsForm') form!: NgForm
  @ViewChild('responseContent') paragraph!: ElementRef<HTMLElement>

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {   
    if (this.authService.hasUser() && environment.adminIds.includes(JSON.parse(this.authService.getUserId()))){
      this.isAdmin = true
      this.authService.getContacts().subscribe(
        response=>{
          this.appComments = response.results
        }
      )
    }
  }
  onClick(): void {
    const data = {
      'name': this.form.value.name,
      'email': this.form.value.email,
      'text': this.form.value.text
    }
    this.authService.postContact(data).subscribe(
      response => {
        if(response){
          this.formSubmitted = true;
          this.form.resetForm()
        }
      },
      err => {
        console.error(err);
      }
    )
  }
}
