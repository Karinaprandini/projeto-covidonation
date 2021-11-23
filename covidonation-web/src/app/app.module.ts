import { FooterModule } from './components/footer/footer.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { CardComponent } from './components/card/card.component';
import { ContatoRoutingModule } from './contato/contato-routing.module';
import { AbadoeRoutingModule } from './abadoe/abadoe-routing.module';

@NgModule({
  declarations: [AppComponent, CardComponent, ],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, FooterModule, ContatoRoutingModule, AbadoeRoutingModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
