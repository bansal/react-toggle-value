# useToggleValue

`useToggleValue` is a custom React hook to toggle value between two given values

## Installation

```sh
# Using npm.
npm install react-toggle-value
```

## Usage

```jsx
import  useToggleValue from "react-toggle-value";

const [
  color,
  toggle,
  turnRed,
  turnGreen
 ] = useToggleValue('red', ['red', 'green']);

const [ loading, toggle ] = useToggleValue(false);

```

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
