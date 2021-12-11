import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { DesignSystemModule } from '@nx-ng-mfe/design-system';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    DesignSystemModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
