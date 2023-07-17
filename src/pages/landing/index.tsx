import {Loading} from "notiflix";
import {useState} from "react";
import sendUrl from "../../utils/sendUrl";

const LandingPage = () => {
  const [url, setUrl] = useState("");

  const [errorMsg, setErrorMsg] = useState("");

  const handleGenerate = () => {
    setErrorMsg("");
    if (url.length > 3) {
      Loading.circle();
      sendUrl(url)
        .then((res: any) => {
          Loading.remove();
        })
        .catch((err: any) => {
          Loading.remove();

          setErrorMsg(err.response?.data?.message);
        });
    } else {
      setErrorMsg("Please enter a URL to scrape");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4 bg-gray-100">
      <h1 className="text-3xl align-middle text-center">
        Please input a URL to be scraped!
      </h1>

      <input
        className="px-3 py-2 border border-gray-300 rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="URL here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <p className="text-xl  text-red-500">{errorMsg}</p>

      <button
        className="px-4 py-2 bg-blue-500 w-[200px] text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        onClick={handleGenerate}>
        Generate
      </button>
    </div>
  );
};

export default LandingPage;
