import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  authorizationParams: {
    scope: 'openid profile email',
  },
  session: {
    rollingDuration: 60 * 60 * 24, // 1 día
  },
});
