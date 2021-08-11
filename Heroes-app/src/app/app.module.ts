import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DetailsComponent } from './details/details.component';
import { ShowMessageComponent } from './show-message/show-message.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { SearchHeroComponent } from './search-hero/search-hero.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    HeroesComponent,
    DetailsComponent,
    ShowMessageComponent,
    DashboardListComponent,
    SearchHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
