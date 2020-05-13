import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExampleModule } from './example/example.module';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ExampleModule,
    LayoutModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
