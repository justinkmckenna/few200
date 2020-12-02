import { BehaviorSubject, Observable } from 'rxjs';
import { GiftItem } from '../models';
import { map } from 'rxjs/operators';

export class GiftService {

  private data: GiftItem[] = [
    { for: 'Mom', holiday: 'Christmas', suggestions: 'chocolate' },
    { for: 'Dad', holiday: 'Christmas', suggestions: 'golf' },
    { for: 'Bro', holiday: 'Christmas', suggestions: 'dumbbells' },
  ];
  private subject = new BehaviorSubject<GiftItem[]>(this.data);

  getGiftData(): Observable<GiftItem[]> {
    return this.subject.asObservable();
  }

  getGiftCount(): Observable<number> {
    return this.subject
      .pipe(
        map(items => items.length)
      );
  }

  addItem(giftItem: GiftItem): void {
    this.data = [...this.data, giftItem];
    this.subject.next(this.data);
  }
}
