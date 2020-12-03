import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { GiftIdeaEntity } from '../reducers/gift-ideas.reducer';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { GiftCreate } from '../models';

@Injectable()
export class GiftService {

  readonly baseUrl = environment.giftApiUrl;
  constructor(private client: HttpClient) {}

  // private data: GiftItem[] = [
  //   { for: 'Mom', holiday: 'Christmas', suggestions: 'chocolate' },
  //   { for: 'Dad', holiday: 'Christmas', suggestions: 'golf' },
  //   { for: 'Bro', holiday: 'Christmas', suggestions: 'dumbbells' },
  // ];
  // private subject = new BehaviorSubject<GiftItem[]>(this.data);

  getGiftData(): Observable<GiftIdeaEntity[]> {
    // return this.subject.asObservable();
    return this.client.get<{data: GiftIdeaEntity[]}>(this.baseUrl + 'gifts')
    .pipe(
      map(response => response.data)
    );
  }

  addItem(giftItem: GiftCreate): Observable<GiftIdeaEntity> {
    // this.data = [...this.data, giftItem];
    // this.subject.next(this.data);
    return this.client.post<GiftIdeaEntity>(this.baseUrl + 'gifts', giftItem);
  }
}
