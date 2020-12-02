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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { CountByComponent } from './components/count-by/count-by.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './effects/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    GiftEntryComponent,
    GiftListComponent,
    GiftGivingComponent,
    GiftCountComponent,
    DashboardComponent,
    CounterComponent,
    NavComponent,
    CountByComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [GiftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
