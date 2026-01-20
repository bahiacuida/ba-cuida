import { list } from '@keystone-6/core'
import { indicatorListFields } from './fields'
import { userAuthorization } from '../../users/userAuthorization'
import { listAccess } from '@orioro/keystone-util'

const AUTHORIZE_ADMIN = ({ session }) => {
  return Boolean(session.data?.isSystemAdmin)
}

export function indicatorList() {
  return list({
    access: listAccess({
      query: true,
      create: true,
      // create: userAuthorization(AUTHORIZE_ADMIN),
      update: userAuthorization(AUTHORIZE_ADMIN),
      delete: userAuthorization(AUTHORIZE_ADMIN),
    }),

    fields: indicatorListFields(),
  })
}
