import { userLists } from '../users'
import { indicatorLists } from '../indicators'

import { flow } from 'lodash'

export function allLists() {
  return flow([userLists, indicatorLists])({})
}
