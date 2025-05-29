import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      issuer: "https://discord.com",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
