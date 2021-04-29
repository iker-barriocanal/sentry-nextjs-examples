// https://nextjs.org/docs/api-routes/introduction

import * as Sentry from '@sentry/nextjs';

// Sentry.init({
//   dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,
// });

const defaultServer = (req, res) => {
  throw new Error("sample backend error");
}

export default Sentry.withSentry(defaultServer);
