import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() locaion:string = ''
  @Input() heading:string = ''
  @Input() heading2:string = ''
  @Input() descr:string = ''
  @Input() imageUrl:string = ''
  @Input() hasButton:boolean = true
  @Input() button_text:string = 'GET STARTED'
  @Input() button_link:string = '/blog'


  constructor() { }

  ngOnInit(): void {
  }

}
