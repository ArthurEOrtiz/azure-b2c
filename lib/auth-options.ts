import { NextAuthOptions } from "next-auth";
import AzureADB2CProvider  from "next-auth/providers/azure-ad-b2c";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
    providers: [
        AzureADB2CProvider({
            tenantId: process.env.AZURE_AD_B2C_TENANT_ID as string,
            clientId: process.env.AZURE_AD_B2C_CLIENT_ID as string,
            clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET as string,
            primaryUserFlow: process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW as string,
            authorization: { 
                params: { 
                    scope:  `https://${process.env.AZURE_AD_B2C_TENANT_ID}.onmicrosoft.com/api/PublicInfo.Read offline_access openid`,
                } 
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
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
    callbacks: {
        async session({ session, token, user }) {
            return session;
        }
    },
};
