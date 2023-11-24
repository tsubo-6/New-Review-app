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
	// access_tokenを取得
	// JWTが生成されるタイミング(ログイン時)実行される
	// 暗号化され、cookieに保存される
	// callbacks: {
  // 	async jwt({ token, account }) {
	// 		// プロバイダからアカウント情報が取得できた時
	// 		if (account) {
  //     	token.accessToken = account.access_token
  //   	}
	// 		// !! 本番環境では絶対にやらない !!
	// 		console.log("tokenの中身:",token)
  //   	return token;
  // 	},
	// },

});
export { handler as GET, handler as POST };
