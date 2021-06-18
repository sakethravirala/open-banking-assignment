/*
 * Copyright (C) - All Rights Reserved
 * Written by Saketh Ravirala
 * Unauthorized use or copying of this file, via any medium is strictly prohibited and will be subject to legal action.
 * Proprietary and confidential
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
