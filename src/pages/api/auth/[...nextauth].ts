import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id = account.providerAccountId;
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token: user }) {
      session.user = user;

      return session;
    },
  },
  secret: process.env.SECRET,
});
