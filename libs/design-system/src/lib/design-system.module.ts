import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlkButtonComponent } from './blk-button/blk-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BlkButtonComponent
  ],
  exports: [
    BlkButtonComponent
  ],
})
export class DesignSystemModule {}
