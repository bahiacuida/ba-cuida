import { get } from 'lodash'
import { mergeHeaders } from './mergeHeaders'

export function fetchGql(
  endpoint,
  { query, variables, result: getResult },
  { fetch: customFetch, headers: customHeaders, ...fetchOpt } = {},
) {
  const _fetch = typeof customFetch === 'function' ? customFetch : fetch

  //
  // Wrap whole return into a Promise in order
  // to cleanly resolve and reject.
  // TODO study cleaner ways of achieving this result
  //
  return new Promise((resolve, reject) => {
    _fetch(endpoint, {
      method: 'POST',
      headers: mergeHeaders(
        {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        customHeaders,
      ),
      body: JSON.stringify({
        query,
        variables,
      }),
      //
      // FetchOpt may override any values
      //
      ...fetchOpt,
    })
      .then((r) => r.json())
      .then(({ errors, data }) => {
        if (errors) {
          reject(errors)
        } else {
          try {
            resolve(
              getResult
                ? typeof getResult === 'string'
                  ? get(data, getResult)
                  : getResult(data)
                : data,
            )
          } catch (err) {
            //
            // Catching errors on result resolution so that
            // resolvers may safely throw to indicate an error
            //
            reject(err)
          }
        }
      })
      .catch(reject)
  })
}
