import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  formSubmitted: boolean = false;
  @ViewChild('contactsForm') form!: NgForm
  @ViewChild('responseContent') paragraph!: ElementRef<HTMLElement>

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onClick(): void {
    const data = {
      'name': this.form.value.name,
      'email': this.form.value.email,
      'text': this.form.value.text
    }
    this.authService.postContact(data).subscribe(
      response => {
        this.formSubmitted = true;
        this.form.resetForm()
        console.log(response);
      },
      err => {
        console.error(err);
      }
    )
  }
}
