import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { ShareComponent } from './share/share.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MensWearComponent } from './mens-wear/mens-wear.component';
import { WomensWearComponent } from './womens-wear/womens-wear.component';
import { ShortCodesComponent } from './short-codes/short-codes.component';
import { ContactMenuComponent } from './contact-menu/contact-menu.component';
import { HoverEffectElementComponent } from './hover-effect-element/hover-effect-element.component';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { HoverEffectCardComponent } from './hover-effect-card/hover-effect-card.component';
import { CasrouselBannerComponent } from './casrousel-banner/casrousel-banner.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TrendingComponent } from './trending/trending.component';
import { TrendingBlockComponent } from './trending-block/trending-block.component';
import { OffersBannerComponent } from './offers-banner/offers-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ShareComponent,
    CarouselComponent,
    NavigationComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    MensWearComponent,
    WomensWearComponent,
    ShortCodesComponent,
    ContactMenuComponent,
    HoverEffectElementComponent,
    FirstLetterPipe,
    HoverEffectCardComponent,
    CasrouselBannerComponent,
    ScheduleComponent,
    TrendingComponent,
    TrendingBlockComponent,
    OffersBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }