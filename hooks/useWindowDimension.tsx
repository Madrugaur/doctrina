import {useState, useEffect, useCallback} from "react";

export default function useWindowDimensions() {
  const getWindowDimensions = useCallback(() => {
    console.log('getWindowDimensions')
    const width = window.innerWidth;
    const height = window.innerHeight;

    return {
      height,
      width
    };
  }, []);

  const [windowDimensions, setWindowDimensions] = useState({width: undefined, height: undefined});

  useEffect(() => {
    const listener = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', listener);
    window.addEventListener('load', listener);
    getWindowDimensions();
    return () => window.removeEventListener('resize', listener);
  }, [])

  return windowDimensions;
}