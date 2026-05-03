import { betterAuth } from 'better-auth';
import { LibsqlDialect } from '@libsql/kysely-libsql';

const dialect = new LibsqlDialect({
  url: process.env.TURSO_DATABASE_URL || 'file:./skillsphere.db',
  authToken: process.env.TURSO_AUTH_TOKEN
});

export const auth = betterAuth({
  database: { dialect, type: 'sqlite' },
  emailAndPassword: { enabled: true },
  socialProviders: {
    google: { clientId: process.env.GOOGLE_CLIENT_ID || '', clientSecret: process.env.GOOGLE_CLIENT_SECRET || '' }
  },
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL
});
