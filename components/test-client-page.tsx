"use client";

import { useEffect } from "react";

const TestClientPage: React.FC = () => {
    useEffect(() => {
        console.log("Test Client Page mounted");
    }, []);

    return (
        <div>
            <h1>Test Client Page</h1>
        </div>
    );
}

export default TestClientPage;
