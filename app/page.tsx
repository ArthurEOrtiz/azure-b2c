
const Home: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Hello World!</h1>
      <p className="text-lg">
        This is an application to test authentication with Azure B2C. This is the home page, no authentication is required to view this page.
      </p>
    </div>
  );
}

export default Home;
