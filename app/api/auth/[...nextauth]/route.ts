import { authOptions } from '@/lib/auth-options';
import NextAuth from 'next-auth';


// const handler = NextAuth({
//     ...authOptions,
//     cookies: {
//         sessionToken: {
//             name: 'next-auth.session-token',
//             options: {
//                 httpOnly: true,
//                 sameSite: 'lax',
//                 path: '/',
//                 secure: process.env.NODE_ENV === 'production',
//             },
//         },
//     },
// });

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };