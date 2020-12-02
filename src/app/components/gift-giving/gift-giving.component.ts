import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GiftItem } from 'src/app/models';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-gift-giving',
  templateUrl: './gift-giving.component.html',
  styleUrls: ['./gift-giving.component.scss']
})
export class GiftGivingComponent implements OnInit {

  constructor(private giftService: GiftService) { }

  data$!: Observable<GiftItem[]>;

  ngOnInit(): void {
    this.data$ = this.giftService.getGiftData();
  }

  addItem(item: GiftItem): void {
    this.giftService.addItem(item);
  }

}
