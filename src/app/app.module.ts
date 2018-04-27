import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServiceModule } from './service/service.module';
import { RoutesModule, routingComponents } from './routes/routes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [BrowserModule, HttpClientModule, RoutesModule, ServiceModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
