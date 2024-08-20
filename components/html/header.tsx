const Header: React.FC = () => {
    return (
        <header className="bg-primary p-4">
            <div>
                <h1 className="text-3xl font-bold ">Azure B2C</h1>
                <p className="text-lg">Testing auth with Azure B2C</p>
            </div>
            <nav className="flex space-x-4 justify-center">
                <a href="/">Home</a>
                <a href="/restricted-page">Restricted Page</a>
            </nav>
        </header>
    );
}

export default Header;