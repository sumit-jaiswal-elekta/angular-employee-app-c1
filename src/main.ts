import { enableProdMode, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideZoneChangeDetection(),provideRouter(routes, withHashLocation()), provideHttpClient()],
})
  .then((ref) => {
    // For fuller StackBlitz support:
    // Ensure Angular destroys itself on hot reloads.
    if ((window as any).ngRef) {
      (window as any).ngRef.destroy();
    }
    (window as any).ngRef = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
