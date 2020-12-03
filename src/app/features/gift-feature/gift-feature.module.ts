import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftEntryComponent } from './components/gift-entry/gift-entry.component';
import { GiftGivingComponent } from './components/gift-giving/gift-giving.component';
import { GiftListComponent } from './components/gift-list/gift-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GiftCountComponent } from './components/gift-count/gift-count.component';
import { GiftFeatureComponent } from './gift-feature.component';
import { featureName, reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { GiftAppEffects } from './effects/gift-app.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { GiftEffects } from './effects/gift-effects';
import { GiftService } from './services/gift.service';

@NgModule({
  declarations: [
    GiftEntryComponent,
    GiftGivingComponent,
    GiftListComponent,
    GiftCountComponent,
    GiftFeatureComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([GiftAppEffects, GiftEffects]),
    HttpClientModule
  ],
  providers: [
    GiftService
  ],
  exports: [
    GiftFeatureComponent
  ]
})
export class GiftFeatureModule { }
