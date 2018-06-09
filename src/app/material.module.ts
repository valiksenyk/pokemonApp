import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatInputModule, MatListModule, MatProgressBarModule, MatProgressSpinnerModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
})
export class MaterialModule { }
