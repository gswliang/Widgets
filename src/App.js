import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend Javascript framework.",
  },
  {
    title: "Why use React？",
    content: "React is a favorite JS library among engineers!",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

const options = [
  {
    label: "This is Red.",
    value: "red",
  },
  {
    label: "This is Green.",
    value: "green",
  },
  {
    label: "This is Purple.",
    value: "purple",
  },
  {
    label: "This is Yellow.",
    value: "yellow",
  },
  {
    label: "This is Grey.",
    value: "grey",
  },
  {
    label: "This is Blue.",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [hideDropdown, setHidedropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <div>
          {hideDropdown ? (
            <Dropdown
              label="Select a color:"
              selected={selected}
              setSelected={setSelected}
              options={options}
            />
          ) : null}
          <button
            className="ui button"
            onClick={() => {
              setHidedropdown(!hideDropdown);
            }}
          >
            Dropdown
          </button>
        </div>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
