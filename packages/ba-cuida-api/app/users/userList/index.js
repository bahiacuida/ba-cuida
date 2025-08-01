import { list } from '@keystone-6/core'
import { userListFields } from './fields'
import { userAuthorization } from '../userAuthorization'
import { listAccess } from '@orioro/keystone-util'

const AUTHORIZE_SELF = ({ session }) => {
  return {
    id: {
      equals: session.itemId,
    },
  }
}

export function userList() {
  return list({
    access: listAccess({
      query: userAuthorization(AUTHORIZE_SELF),
      create: true,
      update: userAuthorization(AUTHORIZE_SELF),
      delete: userAuthorization(false),
    }),

    // this is the fields for our User list
    fields: userListFields(),
  })
}
