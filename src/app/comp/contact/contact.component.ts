import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() author: string = '';
  @Input() content: string = '';
  @Input() email: string = '';
  @Input() contactId: string = '';
  mailto: string = ''
  isNotDeleted: boolean = true

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.mailto = 'mailto:' + this.email
  }
  onDelete(): void {
    this.isNotDeleted = false;
    this.authService.deleteContact(this.contactId).subscribe()
  }
}
