// src/app/series/listar-series.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';
import { DetalleSeriesComponent } from '../detalle-series/detalle-series.component';  // Importa el componente de detalle

@Component({
  selector: 'app-listar-series',
  templateUrl: './listar-series.component.html',
  styleUrls: ['./listar-series.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, DetalleSeriesComponent]
})
export class ListarSeriesComponent implements OnInit {
  series: any[] = [];
  averageSeasons: number = 0; 
  selectedSerie?: Serie;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://gist.githubusercontent.com/josejbocanegra/8490b48961a69dcd2bfd8a360256d0db/raw/34ff30dbc32392a69eb0e08453a3fc975a3890f0/series.json')
      .subscribe(data => {
        this.series = data;
        this.calculateAverageSeasons();
      });
  }
  calculateAverageSeasons(): void {
    const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    this.averageSeasons = this.series.length > 0 ? totalSeasons / this.series.length : 0;
  }
  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;  // Actualiza la serie seleccionada
  }


}
