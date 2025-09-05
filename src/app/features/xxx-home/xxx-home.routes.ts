import { Route } from "@angular/router";
import { XxxHome } from "./xxx-home";

export const xxxHomeRoutes: Route[] = [
  {
    path: '',
    providers: [],
    children: [
      {
        path: '',
        component: XxxHome,
      }
    ],
  },
];
