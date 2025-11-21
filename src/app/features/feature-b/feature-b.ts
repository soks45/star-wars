import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sw-feature-b',
  imports: [],
  templateUrl: './feature-b.html',
  styleUrl: './feature-b.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureB {

}
