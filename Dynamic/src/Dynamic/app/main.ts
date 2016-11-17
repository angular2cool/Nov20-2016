import { platformBrowser } from '@angular/platform-browser';

// for AoT template compile
import { AppModuleNgFactory } from './app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
