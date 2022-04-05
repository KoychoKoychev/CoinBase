import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  formSubmitted:boolean = false;
  @ViewChild('contactsForm') form!: NgForm

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onClick():void{
    const data = {
      'username':this.form.value.username,
      'email':this.form.value.email,
      'text':this.form.value.text
    }

    this.authService.postContact(data).subscribe(
      response => {
        this.formSubmitted = true;
        this.form.resetForm()},
      err => console.log(err)     
    )
  }
}
