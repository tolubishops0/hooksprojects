import React, { useState, useEffect } from "react";
import axios from "axios";

function Covert({ language, text }) {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchTranslation();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [language, text]);

  const fetchTranslation = async () => {
    const { data } = await axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
        },
      }
    );

    //the results has data as well so we call it twice
    setTranslated(data.data.translations[0].translatedText);
  };

  return (
    <div>
      <div className="ui header">
        <h1>{translated}</h1>
      </div>
    </div>
  );
}

export default Covert;
