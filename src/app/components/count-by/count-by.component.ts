import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countBy } from 'src/app/actions/counter.actions';
import { AppState, selectCounterCountBy } from 'src/app/reducers';

@Component({
  selector: 'app-count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./count-by.component.scss']
})
export class CountByComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  countBy$!: Observable<number>;

  ngOnInit(): void {
    this.countBy$ = this.store.pipe(select(selectCounterCountBy));
  }

  countBy(num: number): void {
    this.store.dispatch(countBy({num}));
  }

}
