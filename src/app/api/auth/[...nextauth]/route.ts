import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
		}),
	],
	callbacks: {
  	async jwt({ token, user, account, profile }) {
    	console.log(`account:${JSON.stringify(account)}`);
    	return token;
  	},
	},
});
export { handler as GET, handler as POST };
