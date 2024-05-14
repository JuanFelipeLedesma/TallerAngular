// src/main.ts
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http'; 

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [HttpClientModule] // Añadir HttpClientModule aquí
}).catch(err => console.error(err));
