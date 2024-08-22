"use client";
import { signOut, useSession } from "next-auth/react";


const RestrictedClientPage: React.FC = () => {
    const { data: session, status } =  useSession();

    if (session) {
        return (
            <>
                <div className="border rounded-xl p-2 space-y-2">
                    <div>
                        <p className="text-xl font-bold">You are authenticated!</p>
                        <p>Email: {session.user?.email}</p>
                    </div>
                    <button 
                        className="btn btn-error text-white p-1"
                        onClick={() => signOut({ callbackUrl: "/" })}
                    >
                        Sign Out
                    </button>
                </div>
            </>
        );
    }
}

export default RestrictedClientPage;

