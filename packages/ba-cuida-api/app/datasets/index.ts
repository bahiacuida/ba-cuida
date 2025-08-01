export * from './constants'

import { KeystoneConfig } from '@keystone-6/core/types'
import { DATASET_LIST_NAME } from './constants'
import { datasetList } from './datasetList'

export function datasetLists(
  lists: KeystoneConfig['lists'],
): KeystoneConfig['lists'] {
  return {
    ...lists,
    [DATASET_LIST_NAME]: datasetList(),
  }
}
