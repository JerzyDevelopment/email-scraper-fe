const LandingPage = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen space-y-4 bg-gray-100">
        <h1 className="text-3xl align-middle text-center">Please input a URL to be scraped!</h1>

        <input
          className="px-3 py-2 border border-gray-300 rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholder="URL here..."
        />

        <button className="px-4 py-2 bg-blue-500 w-[200px] text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Generate
        </button>
      </div>
    );
};

export default LandingPage;
