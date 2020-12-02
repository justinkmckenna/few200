import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-gift-count',
  templateUrl: './gift-count.component.html',
  styleUrls: ['./gift-count.component.scss']
})
export class GiftCountComponent implements OnInit {

  constructor(private giftService: GiftService) { }

  count$!: Observable<number>;

  ngOnInit(): void {
    this.count$ = this.giftService.getGiftCount();
  }

}
