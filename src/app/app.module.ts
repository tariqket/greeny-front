import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreenHouseComponent } from './logic/green-house/green-house.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { GreenHouseService } from './logic/green-house/service/green-house.service';

@NgModule({
  declarations: [
    AppComponent,
    GreenHouseComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GreenHouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
