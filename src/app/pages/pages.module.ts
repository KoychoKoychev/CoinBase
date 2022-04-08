import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoreModule } from '../core/core.module';
import { CompModule } from '../comp/comp.module';
import { Router, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { BlogComponent } from './blog/blog.component';
import { BlogModule } from '../feature/blog/blog.module';
import { PriceService } from '../core/price.service';
import { DetailsComponent } from './details/details.component';
import { CreateBlogPostComponent } from './create-blog-post/create-blog-post.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    RegisterComponent,
    LoginComponent,
    BlogComponent,
    DetailsComponent,
    CreateBlogPostComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    CompModule,
    FormsModule,
    RouterModule,
    BlogModule
  ],
  providers: [
    AuthService,
    PriceService
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    RegisterComponent,
    LoginComponent,
  ]
})
export class PagesModule { }
