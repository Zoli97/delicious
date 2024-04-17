import React, { useEffect, useState } from "react";

//what is timeout i want waste before firing up an api call, waiting for next keystroke or another char, callback thats going to be call after the timeout is ended

export function useDebouncer(value, timeout, callback) {
  const [timer, setTimer] = useState(null);

  const clearTimer = () => {
    if (timer) clearTimeout(timer);
  };

  //render every single time or should be trigger every single time the value change
  useEffect(() => {
    //every single time the api whatever the value is going to be changing and settimeout still goes on
    if (value && callback) {
      const newTimer = setTimeout(callback, timeout);
      setTimer(newTimer);
    }
  }, [value]);
}
