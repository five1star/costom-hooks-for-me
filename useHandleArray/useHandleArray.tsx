import { useState } from "react";

export default function useHandleArray(initial: T[]) {
  const [array, setArray] = useState(initial);

  function push(element) {
    setArray((prev) => [...prev, element]);
  }

  function filter(callback) {
    setArray((prev) => prev.filter(callback));
  }

  function update(index, newElement) {
    setArray((prev) => [
      ...prev.slice(0, index),
      newElement,
      ...prev.slice(index + 1, prev.length),
    ]);
  }

  function remove(index) {
    setArray((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1, prev.length),
    ]);
  }

  function clear() {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
}
