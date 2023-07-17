import { useEffect, useRef } from "react";

/**
 * A custom hook for storing the previous state (componentDidUpdate equivalent)
 * @param value any value to store
 * @returns
 */
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;
