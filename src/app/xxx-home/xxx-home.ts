import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { XxxContentType } from "../xxx-common/xxx-content/xxx-content-types";
import { XxxContent } from '../xxx-common/xxx-content/xxx-content';
import { XxxContentFacade } from "../xxx-common/xxx-content/xxx-content-facade";
import { XxxSanitizePipe } from '../xxx-common/xxx-sanitize/xxx-sanitize-pipe';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    XxxContent,
    XxxSanitizePipe,
  ],
  selector: 'xxx-home',
  standalone: true,
  templateUrl: './xxx-home.html',
})
export class XxxHome {
  protected readonly contentKey = 'home';
  private contentFacade: XxxContentFacade = inject(XxxContentFacade);
  protected readonly $content: Signal<XxxContentType | undefined> = this.contentFacade.$content;

  constructor() {
    this.contentFacade.showContent(this.contentKey);
  }
}
