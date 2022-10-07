import NextAuth, {NextAuthOptions} from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import { env } from 'process';
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: env.CLIENT_ID ? env.CLIENT_ID : '',
      clientSecret: env.CLIENT_SECRET ? env.CLIENT_SECRET : '',
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)