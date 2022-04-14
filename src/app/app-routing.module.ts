import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CreateBlogPostComponent } from './pages/create-blog-post/create-blog-post.component';
import { CryptoMarketComponent } from './pages/crypto-market/crypto-market.component';
import { DetailsComponent } from './pages/details/details.component';
import { EditBlogPostComponent } from './pages/edit-blog-post/edit-blog-post.component';
import { GiftcardMarketComponent } from './pages/giftcard-market/giftcard-market.component';
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
    path: 'posts/edit/:postId',
    canActivate:[AuthGuard],
    component: EditBlogPostComponent
  },
  {
    path: 'posts/:postId',
    component: DetailsComponent
  },
  {
    path: 'blog/create',
    canActivate:[AuthGuard],
    component: CreateBlogPostComponent
  },
  {
    path: 'market/giftcards',
    canActivate:[AuthGuard],
    component: GiftcardMarketComponent
  },
  {
    path: 'market/crypto',
    canActivate:[AuthGuard],
    component: CryptoMarketComponent
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })