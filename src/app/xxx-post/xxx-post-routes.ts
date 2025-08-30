import { Route } from "@angular/router";
import { XxxPost } from "./xxx-post";
import { XxxPostEdit } from "./xxx-post-edit/xxx-post-edit";

export const xxxPostRoutes: Route[] = [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        component: XxxPost,
      },
      {
        path: 'edit',
        component: XxxPostEdit,
      },
    ],
  },
];
