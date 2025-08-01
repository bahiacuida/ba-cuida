import { authorizationCreator } from '@orioro/keystone-util'

import { USER_LIST_NAME } from './constants'

export const userAuthorization = authorizationCreator({
  default: {
    listKey: USER_LIST_NAME,
  },
  systemAdmin: {
    listKey: USER_LIST_NAME,
    criteria: (accessInput) => Boolean(accessInput.session.data?.isSystemAdmin),
    defaultAccess: true,
  },
})
