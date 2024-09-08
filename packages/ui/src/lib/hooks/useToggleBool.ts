import { useCallback, useState } from "react";

export function useToggleBool() {
  const [currentBoll, setCurrentBool] = useState<boolean>(false);
  const setToTrue = () => {
    setCurrentBool(true);
  };
  const setToFalse = useCallback(() => {
    setCurrentBool(false);
  }, []);
  const toggle = useCallback(() => {
    setCurrentBool(!currentBoll);
  }, [currentBoll]);
  return { currentBoll, setToFalse, setToTrue, toggle };
}
