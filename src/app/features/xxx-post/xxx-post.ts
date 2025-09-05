import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { XxxContentType } from "../../core/xxx-content/xxx-content-types";
import { XxxContent } from '../../core/xxx-content/xxx-content';
import { XxxContentFacade } from "../../core/xxx-content/xxx-content-facade";
import { XxxPostType } from "./xxx-post-types";
import { XxxPostFacade } from "./xxx-post-facade";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    XxxContent,
  ],
  selector: 'xxx-post',
  standalone: true,
  templateUrl: './xxx-post.html',
})
export class XxxPost {
  protected readonly contentKey: string = 'post';
  private contentFacade: XxxContentFacade = inject(XxxContentFacade);
  protected readonly $content: Signal<XxxContentType | undefined> = this.contentFacade.$content;
  private postFacade: XxxPostFacade = inject(XxxPostFacade);
  protected readonly $isNoSelectedUser: Signal<boolean> = this.postFacade.$isNoSelectedUser;
  protected readonly $isPostsEmpty: Signal<boolean> = this.postFacade.$isPostsEmpty;
  protected readonly $isPostsLoaded: Signal<boolean> = this.postFacade.$isPostsLoaded;
  protected readonly $isPostsLoading: Signal<boolean> = this.postFacade.$isPostsLoading;
  protected readonly $posts: Signal<XxxPostType[]> = this.postFacade.$posts;
  protected readonly $selectedPostId: Signal<number | undefined> = this.postFacade.$selectedPostId;

  constructor() {
    this.contentFacade.showContent(this.contentKey)
    this.postFacade.showPosts();
  }

  protected selectPost(post: XxxPostType): void {
    this.postFacade.selectPost(post.id);
  }
}
