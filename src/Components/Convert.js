import axios from "axios";
import React, { useState, useEffect } from "react";

const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({ language, input }) => {
  const [debounce, setDebounce] = useState(input);
  const [output, setOuput] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounce(input);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [input]);

  useEffect(() => {
    const translatons = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounce,
            target: language.value,
            key: key,
          },
        }
      );
      setOuput(data.data.translations[0].translatedText);
    };

    translatons();
  }, [language, debounce]);

  return (
    <div className="ui content">
      <h1 className="ui header">{output}</h1>
    </div>
  );
};

export default Convert;
