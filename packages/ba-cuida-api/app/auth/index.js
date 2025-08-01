import { createAuth } from '@keystone-6/auth'

import { statelessSessions } from '@keystone-6/core/session'
import { parseEnv } from '@orioro/parse-env'
import ms from 'ms'

import { USER_LIST_NAME } from '../users'

export function auth() {
  const { SESSION_SECRET, SESSION_COOKIE_DOMAIN } = parseEnv({
    SESSION_COOKIE_DOMAIN: 'env:SESSION_COOKIE_DOMAIN',
    SESSION_SECRET: 'env:SESSION_SECRET',
  })

  const { withAuth } = createAuth({
    listKey: USER_LIST_NAME,
    identityField: 'email',
    secretField: 'password',
    sessionData: 'isSystemAdmin',
    initFirstItem: {
      // If there are no items in the database, keystone will ask you to create
      // a new user, filling in these fields.
      fields: ['email', 'password'],
      skipKeystoneWelcome: true,
    },
  })

  const session = statelessSessions({
    maxAge: ms('30 days') / 1000, // in seconds
    secret: SESSION_SECRET,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    // sameSite:
    domain: SESSION_COOKIE_DOMAIN,
  })

  return { withAuth, session }
}
