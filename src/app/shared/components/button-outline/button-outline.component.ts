import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-button-outline',
  templateUrl: './button-outline.component.html',
  styleUrls: ['./button-outline.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonOutlineComponent),
      multi: true
    }
  ]
})
export class ButtonOutlineComponent {

  @Input() content = '';
  @Input() styles = '';
  @Input() disabled = false;
  @Input() message = '';


  constructor() { }

}
