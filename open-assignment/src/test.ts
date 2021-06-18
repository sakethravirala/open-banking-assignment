/*
 * Copyright (C) - All Rights Reserved
 * Written by Saketh Ravirala
 * Unauthorized use or copying of this file, via any medium is strictly prohibited and will be subject to legal action.
 * Proprietary and confidential
 */

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
