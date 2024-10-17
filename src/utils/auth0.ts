import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  baseURL: process.env.BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  secret: process.env.SESSION_SECRET,
  routes: {
    callback: '/api/auth/callback',
    postLogoutRedirect: '/',
  },
  authorizationParams: {
    scope: 'openid profile email',
  },
  session: {
    rollingDuration: 60 * 60 * 24, // 1 día
  },
});
