import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MensWearComponent } from './mens-wear/mens-wear.component';
import { WomensWearComponent } from './womens-wear/womens-wear.component';
import { ShortCodesComponent } from './short-codes/short-codes.component';
import { ContactComponent } from './contact/contact.component';
import { ContactMenuComponent } from './contact-menu/contact-menu.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'home',component: HomeComponent},
  {path: 'mens-wear', component: MensWearComponent},
  {path: 'womens-wear', component: WomensWearComponent},
  {path: 'short-codes', component: ShortCodesComponent},
  {path: 'contact-menu', component: ContactMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
