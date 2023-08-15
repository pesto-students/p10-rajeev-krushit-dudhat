import React from 'react';
import axios from 'axios';

function Urlshort() {

  let [value, setValue] = React.useState("");
  let [query, setQuery] = React.useState("");

  let { data, error, isLoading } = useFetch(query);
  

  function handleShortanUrl() {
    setQuery(value);
  }

  return (<>
    <div className="w-100 bg-slate-300 h-screen"> 
      <div className="container flex justify-center m-auto">
        <div className="w-9/12 ">
          <div className="absolute">
          <h1 className="text-5xl font-bold m-5 relative top-20">
            More Than Just Shorter Links
          </h1>

          <p className="text-xl m-5 relative top-20">Built your brands recognition and get detailed insigts on how your links are performing</p>
          </div>
        </div>
        <div className="z-1 w-1/4">
          <img src={require("../assets/workplace.png")} alt="workplace.png" />
        </div>
      </div>

      <div className="container m-auto">
        <div className="p-5 m-auto w-9/12 border-2 border-black rounded">
          <input className="w-10/12 mx-3 p-2 rounded" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button className="w-36 border-2 p-1 border-black bg-cyan-100 rounded disabled:opacity-60" 
          disabled={isLoading}
          onClick={() => handleShortanUrl()} >Shorten It!</button> 
        {error && (
              <p className='text-rose-600 text-left px-4'> {error} </p>
        )}
        </div>
      </div>
      
      <div className="container m-auto py-3">
        <div className="p-5 m-auto w-9/12 border-2 border-black rounded">
          <p className='px-4 mb-1'>shortened url:</p>
          <div className=' flex'>
            <div className="w-10/12 mx-3 p-2 rounded h-10 bg-white"> {data?.short_link} </div>
            <button className="w-36 border-2 p-1 border-black bg-cyan-100 rounded"> Copy </button>
          </div>
        </div>
      </div>
    </div>
  </>)
}

function useFetch(url) {
  let [data, setData] = React.useState('');
  let [error, setError] = React.useState('');
  let [isLoading, setIsLoading] = React.useState(false);
  
  const fetch = React.useCallback(async () => {
    if (url) {
      let baseUrl = "https://api.shrtco.de/v2/shorten?url=";
      try {
        const response = await axios.get(baseUrl + url);
        setData(response.data.result);
      } catch (error) {
        setError(error.response.data.error);
      }
    } else {
      setError('please add a URL');
    }
    setIsLoading(false);
  }, [url]);

  React.useEffect(() => {
    setError('');
    setIsLoading(true);
    fetch();
  }, [fetch]);

  return { data, error, isLoading};
}

export default Urlshort;