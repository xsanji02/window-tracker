import { useState, useEffect } from "react";

export const WindowWidth = () => {
  const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      console.log('resize')
    });
  }, []);
  return (
    <div className="window-box">
      <div className="inner-box">
        <h3>
          Width:<span className="span"></span> {WindowWidth}px
        </h3>
        <h3>
          Height: <span className="span"></span> {windowHeight}px
        </h3>
      </div>
    </div>
  );
};
