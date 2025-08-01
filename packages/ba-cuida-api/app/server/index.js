import { parseEnv } from '@orioro/parse-env'
// import { extendExpressApp } from './extendExpressApp'

const { CORS_ORIGINS } = parseEnv({
  CORS_ORIGINS: 'list:CORS_ORIGINS',
})

export function server({ port }) {
  return {
    port,
    cors: {
      origin: CORS_ORIGINS,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: true,
    },
    // extendExpressApp: extendExpressApp(),
    maxFileSize: 500 * 1024 * 1024,
  }
}
