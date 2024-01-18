import { useCallback, useState } from "react";
import './FAQ.css';

 function UseOpenController(initialState) {
  const [isOpen, setOpenState] = useState(initialState);

  const toggle = useCallback(() => {
    setOpenState((state) => !state);
  }, [setOpenState]);

  return { isOpen, toggle };
}

export default UseOpenController;