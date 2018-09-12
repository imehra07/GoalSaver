import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import Amplify, { Analytics } from 'aws-amplify';
import aws_exports from './aws-exports';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

Amplify.configure(aws_exports);

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
