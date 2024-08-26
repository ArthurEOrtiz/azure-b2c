"use client";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

const ClientWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { data: session, status } = useSession();
    const unauthenticatedPaths = ["/", "/server-side-session"];



    useEffect(() => {
    console.log("ClientWrapper mounted");
    console.log("Session: ", session);
    console.log("Status: ", status);
    }, [session, status]);

    useEffect(() => {
        if(status === "unauthenticated" && typeof window !== "undefined" && !unauthenticatedPaths.includes(window.location.pathname)) { 
            signIn("azure-ad-b2c");
        }
    }, [status]);

    if (status === "loading") {
        return (
            <div className="flex-grow flex flex-col justify-center items-center">  
                <span className="text-2xl">Loading Session...</span>  
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!session && typeof window !== "undefined" && !unauthenticatedPaths.includes(window.location.pathname)) {    
        return null;
    }

    return (
        <>
            {children}
        </>
    );
};

export default ClientWrapper;