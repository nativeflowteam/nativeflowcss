# NativeFlow

A utility-first CSS-in-JS framework tailored for React Native, offering a rich set of utilities such as `flex.justify('center')`, `m.b(4)`, and `border.color('#cccccc')`. These utilities can be composed to create any design, similar to the approach used by Tailwind CSS.

## Installation

```sh
npm install nativeflowcss
```

## Usage

```js
import { p, m, flex, border } from 'nativeflowcss';

// ...
<View style={[ flex.row, flex.justify("around"), flex.gap(12), flex.items("center"), flex.f(1)]}></View>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with &hearts; using [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
