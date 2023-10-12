export function useToggleValue(
    initialValue?: T, 
    [onValue, offValue]?: [T, T]
  ): {
    value: T,
    toggle: () => void,
    turnOn: () => void,
    turnOff: () => void,
  };