export function sqlite() {
  return {
    // we're using sqlite for the fastest startup experience
    //   for more information on what database might be appropriate for you
    //   see https://keystonejs.com/docs/guides/choosing-a-database#title
    provider: 'sqlite',
    url: 'file:./keystone.db',
  }
}
