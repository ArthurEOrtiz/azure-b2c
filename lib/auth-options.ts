import { NextAuthOptions } from "next-auth";
import AzureADB2CProvider  from "next-auth/providers/azure-ad-b2c";

export const authOptions: NextAuthOptions = {
    providers: [
        AzureADB2CProvider({
            tenantId: process.env.AZURE_AD_B2C_TENANT_ID as string,
            clientId: process.env.AZURE_AD_B2C_CLIENT_ID as string,
            clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET as string,
            primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW as string,
            authorization: { 
                params: { 
                    scope: 'offline_access openid',
                    // redirect_uri: 'http://localhost:3000/api/auth/callback/azure-ad-b2c' 
                } 
            },
            // profile(profile) {
            //     // PROFILE_DATA.OAuthProfile
            //     return {
            //         id: profile.sub,
            //         firstName: profile.given_name,
            //         lastName: profile.family_name,
            //         email: profile.emails?.[0] ?? null,
            //     };
            // },
            
        }),
    ],
    // secret: process.env.NEXTAUTH_SECRET as string,
    logger: {
        error(code, ...message) {
            console.error(code, ...message);
        },
        warn(code, ...message) {
            console.warn(code, ...message);
        },
        debug(code, ...message) {
            console.debug(code, ...message);
        }
    },
    debug: true,
};
