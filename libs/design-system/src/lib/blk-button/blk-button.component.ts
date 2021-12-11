import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-ng-mfe-blk-button',
  templateUrl: './blk-button.component.html',
  styleUrls: ['./blk-button.component.css']
})
export class BlkButtonComponent {
  @Input() primary = false;

}
