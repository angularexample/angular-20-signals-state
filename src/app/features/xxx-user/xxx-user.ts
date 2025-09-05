import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { XxxContentType } from "../../core/xxx-content/xxx-content-types";
import { XxxContent } from '../../core/xxx-content/xxx-content';
import { XxxContentFacade } from "../../core/xxx-content/xxx-content-facade";
import { XxxUserType } from "./xxx-user-types";
import { XxxUserFacade } from "./xxx-user-facade";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    XxxContent,
  ],
  selector: 'xxx-user',
  templateUrl: './xxx-user.html',
})
export class XxxUser {
  protected readonly contentKey: string = 'user';
  private contentFacade: XxxContentFacade = inject(XxxContentFacade);
  protected readonly $content: Signal<XxxContentType | undefined> = this.contentFacade.$content;
  private userFacade: XxxUserFacade = inject(XxxUserFacade);
  protected readonly $isUsersEmpty: Signal<boolean> = this.userFacade.$isUsersEmpty;
  protected readonly $isUsersLoaded: Signal<boolean> = this.userFacade.$isUsersLoaded;
  protected readonly $isUsersLoading: Signal<boolean> = this.userFacade.$isUsersLoading;
  protected readonly $selectedUserId: Signal<number | undefined> = this.userFacade.$selectedUserId;
  protected readonly $users: Signal<XxxUserType[]> = this.userFacade.$users;

  constructor() {
    this.contentFacade.showContent(this.contentKey)
    this.userFacade.showUsers();
  }

  protected rowClick(user: XxxUserType): void {
    this.userFacade.selectUser(user.id);
  }
}
