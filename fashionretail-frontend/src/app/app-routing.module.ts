import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ProfilebuttonComponent } from './profilebutton/profilebutton.component';
import { SupplierviewprofileComponent } from './supplierviewprofile/supplierviewprofile.component';
import { BodyComponent } from './body/body.component';




const routes: Routes = [
  {path:'',component:HeroComponent},
  {path:'contact',component:ContactComponent},
  {path:'about', component:AboutComponent},
  {path: 'edit', component:ProfilebuttonComponent},
  {path: 'edit/supplierviewprofile', component:SupplierviewprofileComponent},
  {path: 'supplier/home', component: BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
