import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonSecondaryComponent),
      multi: true
    }
  ]
})
export class ButtonSecondaryComponent {

  @Input() content = '';
  @Input() styles = '';
  @Input() disabled = false;
  @Input() message = '';


  constructor() { }

}
