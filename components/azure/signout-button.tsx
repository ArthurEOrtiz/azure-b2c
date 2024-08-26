"use client";
import { signOut } from "next-auth/react";

interface SignOutButtonProps {
    callbackUrl?: string;
}

const SignOutButton: React.FC<SignOutButtonProps> = ({ callbackUrl = "/"}) => {
    return (
        <button 
        onClick={() => signOut({ callbackUrl: callbackUrl })} 
        className="btn btn-error text-white">
            Sign Out
        </button>
    );
}

export default SignOutButton;