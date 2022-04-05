import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() currentPage:string = ''
  hasUser:boolean = false

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.hasUser = this.authService.hasUser()
  }

  public onLogout():void{
    this.authService.logout()
  }
}
