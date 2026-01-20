export * from './constants'

import { KeystoneConfig } from '@keystone-6/core/types'
import { INDICATOR_LIST_NAME } from './constants'
import { indicatorList } from './indicatorList'

export function indicatorLists(
  lists: KeystoneConfig['lists'],
): KeystoneConfig['lists'] {
  return {
    ...lists,
    [INDICATOR_LIST_NAME]: indicatorList(),
  }
}
