export function mergeHeaders(...headerSets) {
  return headerSets.reduce((acc, set) => {
    if (typeof set !== 'object') {
      return acc
    }

    if ('entries' in set && typeof set.entries === 'function') {
      for (const pair of set.entries()) {
        acc[pair[0]] = pair[1]
      }

      return acc
    } else {
      return {
        ...acc,
        ...set,
      }
    }
  }, {})
}
