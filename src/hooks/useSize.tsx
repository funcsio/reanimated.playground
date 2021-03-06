import React, { useState, useEffect, useLayoutEffect } from "react";

const useSize = (elmRef: any) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(elmRef.current.offsetWidth);
      setHeight(elmRef.current.offsetHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [elmRef.current]);

  return { width, height };
};

export default useSize;
