import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as counterActions from '../actions/counter.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {

  constructor(private actions$: Actions) { }

  countBySet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBy),
      tap(a => localStorage.setItem('by', a.num.toString()))
    ), { dispatch: false }
  );

}
