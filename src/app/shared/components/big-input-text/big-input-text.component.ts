import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-big-input-text',
  templateUrl: './big-input-text.component.html',
  styleUrls: ['./big-input-text.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class BigInputTextComponent {
  @Input() identifier = '';
  @Input() message = '';
  @Input() method = '';
  @Input() description = '';
  @Input() ngIf: any;
  @Input() errormessage = '';
  @Input() controlName: string = "";
  @Input() validationForm!: FormGroup;
  @Input() submitted: boolean = false;
  @Input() readonly = '';

  get hasError(): boolean {
    return (
      this.submitted &&
      (<FormGroup>this.cc.control).controls[this.controlName].errors != null
    );
  }

  constructor(private cc: ControlContainer) { }

}
