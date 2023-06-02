import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './home/header/header.component'
import { MenuComponent } from './home/header/menu/menu.component'
import { AboutMeComponent } from './home/header/about-me/about-me.component'
import { ServicesComponent } from './home/header/services/services.component'
import { ContactComponent } from './home/main/contact/contact.component'
import { MainComponent } from './home/main/main.component'
import { FooterComponent } from './home/footer/footer.component'
import { SiteProjectComponent } from './home/main/site-project/site-project.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutMeComponent,
    ServicesComponent,
    MainComponent,
    FooterComponent,
    SiteProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    MenuComponent,
    FontAwesomeModule,
    ContactComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
