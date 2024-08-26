"use client";
import { signOut, useSession } from "next-auth/react";
import SignOutButton from "./azure/signout-button";


const RestrictedClientPage: React.FC = () => {
    const { data: session, } =  useSession();

    if (session) {
        return (
            <>
                <div className="space-y-2">
                    <div className="flex flex-col items-center space-y-2">
                        <h1 className="text-3xl font-bold">You are authenticated</h1>
                        <div className="border rounded-xl p-2">
                            <p className="text-lg">Session:</p>
                            <pre>{JSON.stringify(session, null, 2)}</pre>
                        </div>
                        
                    </div>
                    <div className="w-full flex justify-end">
                        <SignOutButton />
                    </div>
                </div>
            </>
        );
    }
}

export default RestrictedClientPage;

