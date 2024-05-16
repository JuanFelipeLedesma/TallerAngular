// src/app/series/detalle-series/detalle-series.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../serie';

@Component({
  selector: 'app-detalle-series',
  templateUrl: './detalle-series.component.html',
  styleUrls: ['./detalle-series.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DetalleSeriesComponent {
  @Input() serie!: Serie;  // Recibe los datos de la serie a mostrar
}
