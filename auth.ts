import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import BattleNetProvider from "next-auth/providers/battlenet";
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
import type { Session, NextAuthConfig } from "next-auth";

interface ExtendedSession extends Session {
  accessToken?: string;
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      issuer: "https://discord.com",
    }),
    BattleNetProvider({
      clientId: process.env.BATTLENET_CLIENT_ID,
      clientSecret: process.env.BATTLENET_CLIENT_SECRET,
      issuer: "https://eu.battle.net/oauth",
      checks: ["pkce", "state", "nonce"],
      authorization: {
        params: {
          scope: "wow.profile openid email",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) {
        token.accessToken = account.access_token;
        token.provider = account.provider;
      }
      return token;
    },
    async session({ session, token }) {
      const extendedSession: ExtendedSession = {
        ...session,
        accessToken: token.accessToken as string,
      };
      return extendedSession;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
});
