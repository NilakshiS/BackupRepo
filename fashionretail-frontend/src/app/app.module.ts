import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule,MatIconModule, MatButtonModule,MatMenuModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { MatJumbotronModule } from '@angular-material-extensions/jumbotron';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { HeroComponent } from './hero/hero.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent, SignUpDialogue } from './header/header.component';
import { SupplierEditDialogue } from './supplierviewprofile/supplierviewprofile.component';
import { AboutComponent } from './about/about.component';
import { MatCardModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AddmaterialsbuttonComponent, manufactureAddDialog } from './addmaterialsbutton/addmaterialsbutton.component';
import { DisplaymaterialsComponent } from './displaymaterials/displaymaterials.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material';
import { SupplierviewprofileComponent } from './supplierviewprofile/supplierviewprofile.component';
import { ProfilebuttonComponent } from './profilebutton/profilebutton.component';
import { CardComponent } from './card/card.component';
import { OrderService } from './order.service';
import { BodyComponent } from './body/body.component';
import { DesignerHomePageComponent , UploadDesignsDialogue} from './designer-home-page/designer-home-page.component';
import { from } from 'rxjs';
import { Header1Component } from './header1/header1.component';
import { DesignerviewprofileComponent,designerEditDialogue } from './designerviewprofile/designerviewprofile.component';

//import { ManufactureeditComponent } from './manufactureedit/manufactureedit.component';
// import { ManufactureviewprofileComponent } from './manufactureviewprofile/manufactureviewprofile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ManufactureviewprofileComponent, manufactureEditDialog } from './manufactureviewprofile/manufactureviewprofile.component';
//  import { ReactiveFormsModule } from '@angular/forms';
//  import { BrowserModule } from '@angular/platform-browser';
import { AddmaterialPageComponent } from './addmaterial-page/addmaterial-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    FooterComponent,
    ContactComponent,
    HeroComponent,
    HeaderComponent,
    AboutComponent,
    ManufactureviewprofileComponent,
    ProfilebuttonComponent,
    manufactureEditDialog,
    AddmaterialsbuttonComponent,
    DisplaymaterialsComponent,
    manufactureAddDialog, 
    SupplierEditDialogue,
    CardComponent,
    BodyComponent,
    DesignerHomePageComponent,
    UploadDesignsDialogue,
    HeaderComponent,
    SignUpDialogue,
    Header1Component,
    AboutComponent,
    DesignerviewprofileComponent,
        ManufactureviewprofileComponent,
    ProfilebuttonComponent,
    SignUpComponent,
    LoginComponent,
    AddmaterialPageComponent,
    SupplierviewprofileComponent,
    designerEditDialogue

    ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    HttpClientModule,

    AppRoutingModule,
    MatToolbarModule,
    MatJumbotronModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    Ng2CarouselamosModule,
    MatSidenavModule,
     BrowserAnimationsModule,
     MatCardModule,
     MatDialogModule,
     HttpClientModule,
     FormsModule,
     MatSelectModule,
     MatTabsModule
    
  ],
  
  providers: [OrderService],
  entryComponents : [SupplierEditDialogue,UploadDesignsDialogue,manufactureEditDialog,manufactureAddDialog,designerEditDialogue],
  bootstrap: [AppComponent]

})
export class AppModule { }
