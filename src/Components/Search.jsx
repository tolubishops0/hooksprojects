import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [term, setTerm] = useState("micheal jackson");
  //debounced here is for changing the term  and cancel when another change is made
  const [debouncedText, setDebouncedText] = useState(term);
  const [results, setResults] = useState([]);
  // const [loadig, setLoadig] = useState(true);

  const fetchData = async () => {
    const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: debouncedText,
      },
    });
    setResults(data.query.search);
    // setLoadig(!loadig);
  };
  console.log(results);

  useEffect(() => {
    //call the function on initial render
    fetchData();
    console.log(`cal the ${term}`);
  }, [debouncedText]);

  //for the debounctext useffect will run whenever the term changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(term);
    }, 2000);

    console.log(debouncedText);
    // cancel the running timer once user starts typing and cleans the timer
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderedresults = results.map((result, index) => {
    return (
      <div key={index} className="item">
        <div className="right floated content">
          {/*link to wikipedia */}
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
        </div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>enter Search</label>
          <input
            value={term}
            //detect what is being typed
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">
        {/* {loadig ? "loading..." : renderedresults} */}
        {renderedresults}
      </div>
    </div>
  );
}

export default Search;
