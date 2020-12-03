import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as counterActions from '../actions/counter.actions';
import * as applicationActions from '../actions/app.actions';
import { tap, map, filter } from 'rxjs/operators';

@Injectable()
export class CounterEffects {

  constructor(private actions$: Actions) { } // this actions service lets us observe actions coming out of our reducer

  // logThemAll$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(a.type))
  //   ), { dispatch: false }
  // );

  countBySet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBy),
      tap(a => localStorage.setItem('by', a.num.toString()))
    ), { dispatch: false }
  );

  loadCountBySet$ = createEffect(() =>
      this.actions$.pipe(
        ofType(applicationActions.applicationStart),
        map(() => localStorage.getItem('by')),
        filter((val) => val !== null),
        map((val) => +(val as string)),
        map((num) => counterActions.countBy({num}))
      ), { dispatch: true}
  )

}
