import RestrictedClientPage from "@/components/restricted-client-page";

const RestrictedPage: React.FC = () => {
    return (
        <div className="flex-grow flex flex-col items-center justify-center">
            <div className="bg-error w-full rounded-xl p-4">
                <h1 className="text-3xl font-bold">Restricted Page</h1>
            </div>
            
            <div className="flex-grow flex items-center justify-center">
                <RestrictedClientPage />
            </div>
        </div>
    );
};

export default RestrictedPage;