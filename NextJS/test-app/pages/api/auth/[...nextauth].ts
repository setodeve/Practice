import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
     GithubProvider({
       clientId: process.env.GITHUB_CLIENTID || "",
       clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
     }),
  ],

  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
  },

  jwt: {},

  pages: {},

  callbacks: {
    async session({ session, user }) {
      console.log(session)
      return session;
    },
  },

  events: {},

  debug: false,
});
