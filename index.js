import { useCallback, useState } from "react";

function useToggleValue(
  initialValue = false,
  [onValue, offValue] = [true, false]
) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((currentValue) => (currentValue === onValue ? offValue : onValue));
  }, [onValue, offValue]);

  const turnOn = useCallback(() => {
    setValue(onValue);
  }, [onValue]);

  const turnOff = useCallback(() => {
    setValue(offValue);
  }, [offValue]);
  return [value, toggle, turnOn, turnOff];
}

export default useToggleValue;
