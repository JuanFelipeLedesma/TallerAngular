import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarSeriesComponent } from './series/listar-series/listar-series.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, ListarSeriesComponent, HttpClientModule]  // Combina las importaciones aquí
})
export class AppComponent {
  title = 'Gestión de Series de Televisión';
}
