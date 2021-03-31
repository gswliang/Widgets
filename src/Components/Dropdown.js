import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, selected, setSelected, options }) => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onClickEvt = (evt) => {
      if (ref.current.contains(evt.target)) {
        return;
      }
      setToggle(false);
    };

    document.body.addEventListener("click", onClickEvt, { capture: true });

    //useEffect cleanup what ever we do last time
    return () => {
      document.body.removeEventListener("click", onClickEvt, { capture: true });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          setSelected(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label} </label>
        <div
          onClick={() => {
            setToggle(!toggle);
          }}
          className={`ui selection dropdown ${toggle ? "visible active" : ""}`}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${toggle ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
