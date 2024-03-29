import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DesignSystemModule } from '@nx-ng-mfe/design-system';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    DesignSystemModule,
    RouterModule.forRoot(
      [
        {
          path: 'remote1',
          loadChildren: () =>
            import('remote1/Module').then((m) => m.RemoteEntryModule),
        },
        {
          path: '',
          component: HomeComponent
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
