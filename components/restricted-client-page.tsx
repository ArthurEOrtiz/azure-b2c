"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const RestrictedClientPage: React.FC = () => {
    const { data: session, status } =  useSession();
    console.log("Session", session);   
    console.log("Status", status);
    
    if  (!session) {
        return (
            <div>
                <h1>Restricted Page</h1>
                <p>You are not authenticated</p>
                <button 
                    onClick={() => signIn()}
                    className="btn btn-success"
                >
                    Sign In
                </button>
            </div>
        )
    }

    return (
        <div>
            <h1>Restricted Page</h1>
            <p>You are authenticated</p>
            <p>Email: {session.user?.email}</p>
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    );
}

export default RestrictedClientPage;

