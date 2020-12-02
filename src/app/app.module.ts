import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiftEntryComponent } from './components/gift-entry/gift-entry.component';
import { GiftListComponent } from './components/gift-list/gift-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GiftGivingComponent } from './components/gift-giving/gift-giving.component';
import { GiftService } from './services/gift.service';
import { GiftCountComponent } from './components/gift-count/gift-count.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CounterComponent } from './components/counter/counter.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    GiftEntryComponent,
    GiftListComponent,
    GiftGivingComponent,
    GiftCountComponent,
    DashboardComponent,
    CounterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [GiftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
