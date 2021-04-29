// https://nextjs.org/docs/api-routes/introduction

import * as Sentry from '@sentry/nextjs';

const defaultServer = (req, res) => {
  throw new Error("sample backend error");
}

export default Sentry.withSentry(defaultServer);
