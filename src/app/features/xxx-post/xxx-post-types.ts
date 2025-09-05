export interface XxxPostType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const xxxPostFormDataInitial: XxxPostType = {
  body: '',
  id: 0,
  title: '',
  userId: 0,
};

export const xxxPostInitialState: XxxPostState = {
  isPostsLoading: false,
  isPostUpdating: false,
  posts: [],
};

export interface XxxPostState {
  isPostsLoading: boolean;
  isPostUpdating: boolean;
  postForm?: XxxPostType;
  posts: XxxPostType[];
  selectedPostId?: number;
}
