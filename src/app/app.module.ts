import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule, registerLocaleData } from '@angular/common'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NzCarouselModule } from 'ng-zorro-antd/carousel'
import { NzBackTopModule } from 'ng-zorro-antd/back-top'
import { NzNotificationModule } from 'ng-zorro-antd/notification'

import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './home/header/header.component'
import { MenuComponent } from './home/header/menu/menu.component'
import { AboutMeComponent } from './home/header/about-me/about-me.component'
import { ServicesComponent } from './home/header/services/services.component'
import { ContactComponent } from './home/main/contact/contact.component'
import { MainComponent } from './home/main/main.component'
import { FooterComponent } from './home/footer/footer.component'
import { SiteProjectComponent } from './home/main/site-project/site-project.component'
import { ExperienceComponent } from './home/main/experience/experience.component'
import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { en_US } from 'ng-zorro-antd/i18n'
import en from '@angular/common/locales/en'
import { HttpClientModule } from '@angular/common/http'
import { SlickCarouselModule } from 'ngx-slick-carousel'

registerLocaleData(en)

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
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NzCarouselModule,
    NzBackTopModule,
    NzNotificationModule,
    MenuComponent,
    FontAwesomeModule,
    ContactComponent,
    HttpClientModule,
    SlickCarouselModule,
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
