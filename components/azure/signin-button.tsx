"use client";
import { signIn } from "next-auth/react";

const SignInButton: React.FC = () => {
    return (
        <button 
        onClick={() => signIn("azure-ad-b2c")} 
        className="btn btn-success text-white">
            Sign In
        </button>
    );
}

export default SignInButton;