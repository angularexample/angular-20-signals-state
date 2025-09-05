import { Route } from "@angular/router";
import { XxxUser } from "./xxx-user";

export const xxxUserRoutes: Route[] = [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        component: XxxUser,
      }
    ],
  },
];
