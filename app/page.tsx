const Home: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center space-y-2">
      <h1 className="text-3xl font-bold">Hello World!</h1>
      <div className="w-2/3 border rounded-xl p-2">
        <p className="text-lg">
          This is an application to test authentication with Azure B2C. This is the home page, no authentication is required to view this page.
        </p>
      </div>
    </div>
  );
}

export default Home;
