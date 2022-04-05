import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeroComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeroComponent,
    BlogCardComponent
  ]
})
export class CompModule { }
