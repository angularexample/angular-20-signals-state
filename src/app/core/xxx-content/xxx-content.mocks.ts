import { XxxContentType, XxxContentStatus } from "./xxx-content-types";

export const mockContentHome: XxxContentType = {
  contentModel: {
    bodyText: 'Hello World, this is the body text for home',
    pageTitle: 'Home',
  },
  key: 'home',
  status: XxxContentStatus.LOADED
}
