import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
import {provideStore, Store} from '@ngrx/store';

if (process.env.ENV === 'production') {
  enableProdMode();
}
//Dynamic bootstrapping with the Just-in-time (JiT) compiler
platformBrowserDynamic().bootstrapModule(AppModule);