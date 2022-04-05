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

    this.authService.postContact(this.form.value).subscribe(
      response => this.form.resetForm(),
      err => console.log(err)     
    )
  }
}
