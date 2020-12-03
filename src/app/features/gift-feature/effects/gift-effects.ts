import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as giftActions from '../actions/gift.actions';
import { GiftService } from '../services/gift.service';

@Injectable()
export class GiftEffects {
  // if we get application started -> load gift data
  constructor(private actions$: Actions, private service: GiftService) { }

  loadGiftData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(giftActions.loadGiftData),
      switchMap(() => this.service.getGiftData()
        .pipe(
          map(response => giftActions.loadGiftDataSuccess({ payload: response }))
        )
      )
    )
  );

  giftAdded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(giftActions.giftAdded),
      switchMap((action) => this.service.addItem(action.payload)
        .pipe(
          map(response => giftActions.giftAddedSuccess({ oldId: action.payload.id, payload: response })),
          catchError(() => of(giftActions.giftAddedFailure({payload: action.payload, message: 'Could not add that gift.'})))
        )
      )
    )
  );
}
