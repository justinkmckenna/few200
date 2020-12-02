import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { GiftItem } from 'src/app/models';

@Component({
  selector: 'app-gift-entry',
  templateUrl: './gift-entry.component.html',
  styleUrls: ['./gift-entry.component.scss']
})
export class GiftEntryComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  @Output() itemAdded = new EventEmitter<GiftItem>();

  form!: FormGroup;
  get for(): AbstractControl { return this.form.get('for') as AbstractControl; }
  get holiday(): AbstractControl { return this.form.get('holiday') as AbstractControl; }
  get suggestions(): AbstractControl { return this.form.get('suggestions') as AbstractControl; }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      for: new FormControl('', [Validators.required]),
      holiday: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      suggestions: new FormControl()
    });
  }

  add(focus: HTMLElement): void {
    if (this.form.invalid) {
      console.log('Form Invalid.');
      return;
    }
    console.log(this.form.value);
    this.itemAdded.emit(this.form.value);
    this.form.reset();
    focus.focus();
  }

}
