// convert application actions to my actions, or vice versa

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as giftActions from '../actions/gift.actions';
import * as appActions from '../../../actions/app.actions';

@Injectable()
export class GiftAppEffects {
  // if we get application started -> load gift data
  constructor(private actions$: Actions) {}

  loadGiftData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStart),
      map(() => giftActions.loadGiftData())
    )
  );

  addingHadAnError$ = createEffect(() =>
      this.actions$.pipe(
        ofType(giftActions.giftAddedFailure),
        map(err => appActions.applicationError({ feature: 'gifts', message: err.message }))
      )
  );
}
