import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CreateBlogPostComponent } from './pages/create-blog-post/create-blog-post.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'posts/:postId',
    component: DetailsComponent
  },
  {
    path: 'blog/create',
    component: CreateBlogPostComponent
  }
];

export const AppRoutingModule = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })