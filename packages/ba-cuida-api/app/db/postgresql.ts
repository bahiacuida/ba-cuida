export function postgresql() {
  const DATABASE_URL = process.env.DATABASE_URL
  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL is required')
  }

  return {
    provider: 'postgresql',
    url: DATABASE_URL,
    // Optional advanced configuration
    // enableLogging: true,
    idField: { kind: 'uuid' },
  }
}
