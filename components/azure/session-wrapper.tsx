"use client";
import { SessionProvider } from "next-auth/react";
import React, { useEffect } from "react";

interface SessionWrapperProps {
    children: React.ReactNode;
}

const SessionWrapper: React.FC<SessionWrapperProps> = ({ children }) => {   
    useEffect(() => {
        console.log("SessionWrapper mounted");
    }, []); 
    
    
    return (
        <SessionProvider>{children}</SessionProvider>
    );
}

export default SessionWrapper;