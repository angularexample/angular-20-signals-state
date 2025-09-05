import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { XxxContentFacade } from '../../core/xxx-content/xxx-content-facade';
import { XxxContentType } from '../../core/xxx-content/xxx-content-types';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  selector: 'xxx-header',
  styleUrl: './xxx-header.scss',
  templateUrl: './xxx-header.html',
})
export class XxxHeader {
  private contentFacade: XxxContentFacade = inject(XxxContentFacade);
  protected readonly $content: Signal<XxxContentType | undefined> = this.contentFacade.$content;
}
