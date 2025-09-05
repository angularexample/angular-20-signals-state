import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  selector: 'xxx-header',
  standalone: true,
  styleUrl: './xxx-header.scss',
  templateUrl: './xxx-header.html',
})
export class XxxHeader {
}
