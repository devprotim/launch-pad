import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-home',
  imports: [FormsModule, ButtonModule, TableModule, DatePickerModule, InputTextModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  date: Date | null = null;
  value: string = ''; // Added the missing value property

  // Sample data for PrimeNG table
  customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', country: 'USA' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', country: 'UK' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', country: 'Canada' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', country: 'Australia' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', country: 'Germany' },
    { id: 6, name: 'Diana Davis', email: 'diana@example.com', country: 'France' }
  ];
}
