import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GiftItem } from '../../models';
import { GiftFeatureState, selectGiftItems } from '../../reducers';

@Component({
  selector: 'app-gift-giving',
  templateUrl: './gift-giving.component.html',
  styleUrls: ['./gift-giving.component.scss']
})
export class GiftGivingComponent implements OnInit {

  constructor(private store: Store<GiftFeatureState>) { }

  data$!: Observable<GiftItem[]>;

  ngOnInit(): void {
    // this.data$ = this.giftService.getGiftData(); // using the service we initially created
    this.data$ = this.store.pipe(select(selectGiftItems));
  }

}
