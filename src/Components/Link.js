//this compenent is to prevent loading page each time when we click navigation
import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (evt) => {
    //to open a new tab when user holding ctrl or cmd(mac) + click
    if (evt.metaKey || evt.ctrlKey) {
      return;
    }

    evt.preventDefault();
    //change URL address but not refresh the page
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
