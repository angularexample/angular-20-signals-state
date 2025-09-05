import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { debounceTime, distinctUntilChanged } from "rxjs";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { XxxContentType } from "../../../core/xxx-content/xxx-content-types";
import { XxxContent } from '../../../core/xxx-content/xxx-content';
import { XxxContentFacade } from "../../../core/xxx-content/xxx-content-facade";
import { XxxPostType, xxxPostFormDataInitial } from "../xxx-post-types";
import { XxxPostFacade } from "../xxx-post-facade";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    XxxContent,
  ],
  selector: 'xxx-post-edit',
  templateUrl: './xxx-post-edit.html',
})
export class XxxPostEdit {
  protected readonly contentKey: string = 'post-edit';
  protected postForm: FormGroup = new FormGroup({
    body: new FormControl(xxxPostFormDataInitial.body, Validators.required),
    id: new FormControl(xxxPostFormDataInitial.id),
    title: new FormControl(xxxPostFormDataInitial.title, Validators.required),
    userId: new FormControl(xxxPostFormDataInitial.userId)
  });
  private contentFacade: XxxContentFacade = inject(XxxContentFacade);
  protected readonly $content: Signal<XxxContentType | undefined> = this.contentFacade.$content;
  private postFacade: XxxPostFacade = inject(XxxPostFacade);
  protected readonly $isNoSelectedPost: Signal<boolean> = this.postFacade.$isNoSelectedPost;
  protected readonly $isSaveButtonDisabled: Signal<boolean> = this.postFacade.$isSaveButtonDisabled;
  protected readonly $selectedPost: Signal<XxxPostType | undefined> = this.postFacade.$selectedPost;

  constructor() {
    this.contentFacade.showContent(this.contentKey)
    this.loadFormData();
    this.subscribeToFormChanges();
  }

  protected onSubmit(): void {
    this.postFacade.updatePost();
  }

  private loadFormData(): void {
    const post: XxxPostType | undefined = this.$selectedPost();
    if (post !== undefined) {
      this.postForm.setValue(post);
    }
  }

  private subscribeToFormChanges(): void {
    this.postForm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntilDestroyed(),
    ).subscribe(value => {
      const post: XxxPostType = <XxxPostType>value;
      this.postFacade.setPostForm(post);
    });
  }
}
