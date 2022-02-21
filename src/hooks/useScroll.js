import { useState, useCallback } from "react";

// 커스텀훅으로 true/false 적용시키기
const useScroll = () => {
  const [scrollEvent, setScrollEvent] = useState(false);

  const scrollEventHandler = useCallback((header_bot) => {
    let s_top = window.scrollY;

    if (s_top >= header_bot) {
      setScrollEvent(true);
      return;
    }

    setScrollEvent(false);
  });

  return {
    scrollEventHandler,
    scrollEvent,
  };
};

export default useScroll;
