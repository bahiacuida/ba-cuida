import { userLists } from '../users'
import { datasetLists } from '../datasets'

import { flow } from 'lodash'

export function allLists() {
  return flow([userLists, datasetLists])({})
}
