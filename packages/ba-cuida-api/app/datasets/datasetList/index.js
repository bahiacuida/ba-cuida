import { list } from '@keystone-6/core'
import { datasetListFields } from './fields'
import { userAuthorization } from '../../users/userAuthorization'
import { listAccess } from '@orioro/keystone-util'

const AUTHORIZE_ADMIN = ({ session }) => {
  return Boolean(session.data?.isSystemAdmin)
}

export function datasetList() {
  return list({
    access: listAccess({
      query: true,
      create: userAuthorization(AUTHORIZE_ADMIN),
      update: userAuthorization(AUTHORIZE_ADMIN),
      delete: userAuthorization(AUTHORIZE_ADMIN),
    }),

    fields: datasetListFields(),
  })
}
