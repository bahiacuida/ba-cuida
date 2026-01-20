// import sslRedirect from 'heroku-ssl-redirect'
import express from 'express'

export function extendExpressApp() {
  return function (expressApp, kContext) {
    //
    // Set express limit to 30mb
    //
    expressApp.use(express.json({ limit: '30mb' }))

    //
    // Trust Heroku proxy
    //
    expressApp.set('trust proxy', 1)

    //
    // SSL Redirect
    //
    // expressApp.use(sslRedirect(['production']))
  }
}
