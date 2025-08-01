import 'dotenv/config'

import { config } from '@keystone-6/core'
import { auth } from './app/auth'

import { postgresql, sqlite } from './app/db'
import { allLists } from './app/lists'
import { server } from './app/server'

const { withAuth, session } = auth()

export default withAuth(
  config({
    // db: postgresql(),
    db: sqlite(),
    lists: allLists(),
    server: server({
      port: process.env.PORT,
    }),
    ui: {
      //
      // Block access to admin ui
      //
      isAccessAllowed: (context) =>
        Boolean(context.session?.data?.isSystemAdmin),
    },
    session,
  }),
)
