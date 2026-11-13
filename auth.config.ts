import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {

    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;

      if (pathname.startsWith('/dashboard')) {
        return isLoggedIn; // false → redirect to /login
      }

      if (isLoggedIn && pathname === '/login') {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return true; // /, /docs, and everything else are allowed
    },
  },
  providers: [],
} satisfies NextAuthConfig;