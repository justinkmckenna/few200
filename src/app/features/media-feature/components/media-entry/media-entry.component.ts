import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { mediaAdded } from '../../actions/media-item.actions';
import { MediaItemCreate } from '../../models/media-item-create';
import { MediaFeatureState } from '../../reducers';

@Component({
  selector: 'app-media-entry',
  templateUrl: './media-entry.component.html',
  styleUrls: ['./media-entry.component.scss']
})
export class MediaEntryComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private store: Store<MediaFeatureState>) {}

  form!: FormGroup;
  get title(): AbstractControl { return this.form.get('title') as AbstractControl; }
  get format(): AbstractControl { return this.form.get('format') as AbstractControl; }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      format: new FormControl('', [Validators.required]),
    });
  }

  add(focus: HTMLElement): void {
    if (this.form.invalid) {
      console.log('Form Invalid.');
      return;
    }
    const media: MediaItemCreate = this.form.value;
    media.loanedOut = false;
    this.store.dispatch(mediaAdded({media}));
    this.form.reset();
    focus.focus();
  }

}
