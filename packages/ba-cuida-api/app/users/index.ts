export * from './constants'

import { KeystoneConfig } from '@keystone-6/core/types'
import { USER_LIST_NAME } from './constants'
import { userList } from './userList'

export * from './userAuthorization'

export function userLists(
  lists: KeystoneConfig['lists'],
): KeystoneConfig['lists'] {
  return {
    ...lists,
    [USER_LIST_NAME]: userList(),
  }
}
