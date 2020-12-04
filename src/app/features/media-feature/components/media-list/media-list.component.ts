import { Component, OnInit } from '@angular/core';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { mediaToggleLoaned } from '../../actions/media-item.actions';
import { MediaItem } from '../../models/media-item';
import { selectMediaItems } from '../../reducers';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {

  mediaItems$!: Observable<MediaItem[]>;
  view = 'all';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.mediaItems$ = this.store.pipe(select(selectMediaItems))
  }

  toggleLoanedOut(item: MediaItem): void {
    const payload: Update<MediaItem> = {
      id: item.id,
      changes: { loanedOut: !item.loanedOut }
    };
    this.store.dispatch(mediaToggleLoaned({payload}));
  }

  toggleView(mode: string): void {
    this.view = mode;
  }
}
