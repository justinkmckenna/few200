import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { applicationStart } from './actions/app.actions';
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'few200';

  constructor(store: Store<AppState>) {
    store.dispatch(applicationStart());
  }
}
