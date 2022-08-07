import { Component, Input } from "@angular/core";
import { ControlContainer, FormGroup, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
  
})
export class InputTextComponent {
  @Input() identifier = '';
  @Input() message = '';
  @Input() method = '';
  @Input() description = '';
  @Input() ngIf: any;
  @Input() errormessage = '';
  @Input() controlName: string = "";
  @Input() validationForm!: FormGroup;
  @Input() submitted: boolean = false;

  get hasError(): boolean {
    return (
      this.submitted &&
      (<FormGroup>this.cc.control).controls[this.controlName].errors != null
    );
  }

  constructor(private cc: ControlContainer) { }

}
