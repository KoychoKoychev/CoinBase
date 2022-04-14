import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HeroComponent,
    BlogCardComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeroComponent,
    BlogCardComponent,
    ContactComponent
  ]
})
export class CompModule { }
