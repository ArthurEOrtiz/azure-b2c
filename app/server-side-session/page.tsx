import SignInButton from "@/components/azure/signin-button";
import SignOutButton from "@/components/azure/signout-button";
import { authOptions } from "@/lib/auth-options"
import { getServerSession } from "next-auth"

const ServerSideSessionPage: React.FC = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return (
            <div className="flex-grow flex flex-col justify-center items-center space-y-2">
                <h1 className="text-3xl font-bold text-error">You are not authenticated</h1>
                <p className="text-lg">Log in to demo `getServerSession()`</p>
                <SignInButton />
            </div>
        );
    }

    return (
        <div className="flex-grow flex flex-col justify-center items-center space-y-2">
            <div>
                <h1 className="text-3xl font-bold">You are authenticated</h1>
            </div>
            <div className="space-y-2">
                <div className="border rounded-xl p-2">
                    <p className="text-lg">Session:</p>
                    <pre>{JSON.stringify(session, null, 2)}</pre>
                </div>
                <div className="w-full flex justify-end">
                    <SignOutButton callbackUrl="/server-side-session" />
                </div>
            </div>
        </div>
    );
}

export default ServerSideSessionPage;