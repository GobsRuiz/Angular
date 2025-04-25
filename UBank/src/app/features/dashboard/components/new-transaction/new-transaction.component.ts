import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-transaction',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './new-transaction.component.html',
  styleUrl: './new-transaction.component.css'
})
export class NewTransactionComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(3)]],
      value: ['', [Validators.required, Validators.minLength(3)]],
      transactionType: ['', [Validators.required]],
    })
  }  

  getErrorMessage(controlName: string) {
    const control = this.form.get(controlName);

    if (!control || !control.errors || (!control.touched && !control.dirty)) {
      return '';
    }

    const errors = control.errors;

    if (controlName === 'name') {
      if (errors['required']) return 'O nome é obrigatório.';
      if (errors['minlength']) return 'O nome deve ter no mínimo 3 caracteres.';
    }
    else if (controlName === 'name2') {
      if (errors['required']) return 'O nome é obrigatório.';
      if (errors['minlength']) return 'O nome deve ter no mínimo 3 caracteres.';
    }
    return '';
  }

  onSubmit() {
    if(this.form.valid) {
      console.log('válido')
    }
    else{
      this.form.markAllAsTouched()
    }
  }
}
