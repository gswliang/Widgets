import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const lang = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Chinese(TW)",
    value: "zh-TW",
  },
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "English",
    value: "en",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(lang[0]);
  const [input, setInput] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter something to translate: </label>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        label="Select a language:"
        options={lang}
        selected={language}
        setSelected={setLanguage}
      />

      <hr />
      <h3 className="ui header">Translate output:</h3>
      <Convert language={language} input={input} />
    </div>
  );
};

export default Translate;
